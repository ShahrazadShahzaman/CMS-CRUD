import { collection,deleteDoc,doc,onSnapshot } from "firebase/firestore";
import {db} from "../../firebase/config";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";
import "./food.css"

export const ViewFood=()=>{

    const [viewFood,setViewFood] = useState([]);
    const navigate = useNavigate();

    const handleEdit=(item)=>{
        toast.success("Updating Food...")
        navigate(`/admin/editfood/${item.id}`);
    };

useEffect(()=>{
    const unsubscribe = onSnapshot(collection(db,"food"), (snapshot)=>{
        const foodList =snapshot.docs.map(doc=>({
            id:doc.id,
            ...doc.data()
        }));
        setViewFood(foodList);
});
return unsubscribe;
},[])

const handleDelete = async (id) =>{
    try{
        await deleteDoc(doc(db,"food",id));
        setViewFood(viewFood.filter((food)=> food.id !==id));
        toast.success("Menu Deleted Successfully!")
    }catch (error){
        console.log(error);
        toast.error("Error Deleting Menu")
    }
};

    return(
<>
<div className="view-Food">
 <h2 className="data">Menu List</h2>
 <button className="ANP-btn" onClick={()=> navigate ("/admin/createfood")}> Add New Food</button>
<div className="table-container">
 <table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Food Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        {viewFood && viewFood.map((item, index) => {
            return(
                <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>
                    <button className="actionbtn edit"  onClick={()=>handleEdit(item)}>Edit</button>
                    <button className="actionbtn del" onClick={()=>handleDelete(item.id)}>Delete</button> 
                </td>
                </tr>
            );
        })
        }
    </tbody>
 </table>
</div>
</div>
 </>
    );
};