
import List from '../page/list/List'
import List1 from '../page/list/List1'
import List2 from '../page/list/List2'
import Table from '../page/table/Table'
import Table1 from '../page/table/Table1'
import Table2 from '../page/table/Table2'
import Image from '../page/image/Image'
import Image1 from '../page/image/Image1'
import Image2 from '../page/image/Image2'

export default [
    {
        path:'/table',
        exact:false,
        title:'表格',
        component: Table,
        children:[
           {
            path:'/table/table1',
            title:'表格1',
            component:Table1
           },
           {
            path:'/table/table2',
            title:'表格2',
            component:Table2
            }
        ]
    },
    {
        path: '/list',
        exact:false,
        title:'列表',
        component: List,
        children:[
            {
                path:'/list/List1',
                title:'列表1',
                component:List1
            },
            {
                path:'/list/List2',
                title:'列表2',
                component:List2
            }
         ]
    },
    {
        path: '/image',
        exact:false,
        title:'图片',
        component: Image,
        children:[
            {
                path:'/image/Image1',
                title:'图片1',
                component:Image1
            },
            {
                path:'/image/Image2',
                title:'图片2',
                component:Image2
            }
         ]
    }
]