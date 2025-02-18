import {AdminDashboard} from "../layout/admin/components/index"
import { CreateFood} from "../pages/Admin/createfoods";
import { ViewFood} from "../pages/Admin/viewfoods";
export const AdminRoute= [
    { 
        element:<AdminDashboard/>,
        children:[
            {
                path: "dashboard",
                elements:(
                    <>
                    <CreateFood/>
                    <ViewFood/>
                    </>
                )
            }
            // {
            //     index: true,
            //     element: <CreateFood />
            // },
        //    {
        //     path: 'create-food',
        //     element: <CreateFood/>
        //    },
        //    {
        //     path: 'view-food',
        //     element: <ViewFood/>
        //    }
        ]
    }
]