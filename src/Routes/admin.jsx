import {AdminDashboard} from "../layout/admin/components/index"
import { CreateFood} from "../pages/Admin/createfood";
import { ViewFood} from "../pages/Admin/viewfoods";
import { ProtectedRoute } from "./manage Protection/Protected";
export const AdminRoute= [
    {   
        
        element:<ProtectedRoute/>,
        children:[
            {
                path: '/admin',
              element:<AdminDashboard/>,
              children:[
            
            {
                
                path: "/admin/createfood/:foodId?" ,
                element: <CreateFood/>
            },
            {
                path: "/admin/viewfoods" ,
                element: <ViewFood/>
            },
            {
                path: "/admin/editfood/:foodId?" ,
                element: <CreateFood/>
            },

        ]
    }

        ]
    }
]