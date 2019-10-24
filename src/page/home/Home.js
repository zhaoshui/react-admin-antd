
import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon,Tabs, Button,Row, Col,Avatar } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import menus from '../../router/menus';
import './Home.css'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { TabPane } = Tabs;

class Home extends Component {
      constructor(props) {
        super(props);
        this.newTabIndex = 0;
        const panes = [
          { title: '表格1', content: 'Content of Tab Pane 1', key: '表格1' },
          { title: '表格2', content: 'Content of Tab Pane 2', key: '表格2' },
        ];
        this.state = {
                defaultActiveKey:'仪表盘',
                activeKey: panes[0].key,
                panes,
                collapsed: false,
                
                fullscreen: false,
                menuTreeNode:[],
                menuPath:[],
                BreadcrumbList:[]
        };
      }
    
    toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };
      ToggleFullScreen = () =>{
        let element = document.documentElement;
                if (this.state.fullscreen) {
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    } else if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                    }
                } else {
                    if (element.requestFullscreen) {
                        element.requestFullscreen();
                    } else if (element.webkitRequestFullScreen) {
                        element.webkitRequestFullScreen();
                    } else if (element.mozRequestFullScreen) {
                        element.mozRequestFullScreen();
                    } else if (element.msRequestFullscreen) {
                        // IE11
                        element.msRequestFullscreen();
                    }
                }
                this.setState({
                  fullscreen : !this.state.fullscreen
                })
      }
    componentDidMount(){
      console.log(this.$route)
      console.log(this.props)
        const menuTreeNode1 = this.renderMenu(menus);
        const menuPath1 = this.renderMenuPath(menus);
        this.setState({
            menuTreeNode:menuTreeNode1,
            menuPath:menuPath1
        })
    }
    onChange = (activeKey) => {
      console.log(activeKey)
      this.setState({ activeKey });
    };
    add = () => {
      const { panes } = this.state;
      const activeKey = `newTab${this.newTabIndex++}`;
      panes.push({ title: 'New Tab', content: 'New Tab Pane', key: activeKey });
      this.setState({ panes, activeKey });
    };
  
    remove = targetKey => {
      let { activeKey } = this.state;
      let lastIndex;
      this.state.panes.forEach((pane, i) => {
        if (pane.key === targetKey) {
          lastIndex = i - 1;
        }
      });
      const panes = this.state.panes.filter(pane => pane.key !== targetKey);
      if (panes.length && activeKey === targetKey) {
        if (lastIndex >= 0) {
          activeKey = panes[lastIndex].key;
        } else {
          activeKey = panes[0].key;
        }
      }
      this.setState({ panes, activeKey });
    };
  
    renderMenu = (data) => {
        return data.map((item) => {
           if(item.hideSide !== 'true'){
            if(item.children){
                return <SubMenu key={item.title} title={item.title}>{this.renderMenu(item.children)}</SubMenu>
            }
            return  <Menu.Item key={item.title} title={item.title}><Link to={item.path}>{item.title}</Link></Menu.Item>
           }
        })
    }
    renderMenuPath = (data) => {
        return data.map((item) => {
            if(item.children){
                return <Route key={item.title} path={item.path} exact={item.exact} component={item.component}>{this.renderMenuPath(item.children)}</Route>
            }
            return <Route key={item.title} path={item.path} exact={item.exact} component={item.component} ></Route>
            
        })
    }
    clickMenu(e){
        console.log(e)
        this.setState({
            BreadcrumbList:e.keyPath,
            activeKey:e.key
          });
    }
    render() {
        return (
            <Router>
                <div>
                  <Layout>
                    <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                      <div className="logo" />
                      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" style={{    height: '100vh'}} onClick={this.clickMenu.bind(this)}>
                        {this.state.menuTreeNode}
                      </Menu>
                    </Sider>
                    <Layout>
                      <Header style={{ background: '#fff', padding: '0px 40px' }}>
                        {/* <Icon
                          className="trigger"
                          type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                          onClick={this.toggle}
                        /> */}
                        <Row type="flex" justify="space-between">
                          <Col span={22}>
                              <Icon
                              className="trigger"
                              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                              onClick={this.toggle}
                            />
                          <Breadcrumb style={{ display:'inline-block', margin: '0 20px',}}>
                            <Breadcrumb.Item>{this.state.BreadcrumbList[1]}</Breadcrumb.Item>
                            <Breadcrumb.Item>{this.state.BreadcrumbList[0]}</Breadcrumb.Item>
                          </Breadcrumb>
                          </Col>
                          <Col span={2}>
                          <Icon
                          className="trigger"
                          type={this.state.fullscreen ? 'fullscreen-exit' : 'fullscreen'}
                          onClick={this.ToggleFullScreen}
                        />
                        <Avatar style={{ backgroundColor: '#87d068',display:'inline-block', margin: '0 20px',}} icon="user" />
                          </Col>
                        </Row>
                        
                      
                      </Header>
                      <Content
                        style={{
                          margin: '24px 16px',
                          padding: 24,
                          background: '#fff',
                          minHeight: 280,
                        }}
                      > 
                        <div>
                        {/* <Tabs
                            hideAdd
                            onChange={this.onChange}
                            activeKey={this.state.activeKey}
                            type="editable-card"
                            >
                            {this.state.panes.map(pane => (
                                <TabPane tab={pane.title} key={pane.key}>
                                {pane.content}
                                </TabPane>
                            ))}
                        </Tabs> */}
                        {this.state.menuPath}
                        </div>
                      </Content>
                    </Layout>
                  </Layout>
                </div>
            </Router>
        );
    }
}

export default Home;