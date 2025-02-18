import { collection,deleteDoc,doc,onSnapshot } from "firebase/firestore";
import {db} from "../../firebase/config";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";

export const ViewFood=()=>{

    const [viewFood,setViewFood] = useState([]);
    const navigate = useNavigate();

    const handleEdit=(item)=>{
        toast.success("Updating Food...")
        setTimeout(()=>{
            navigate(`/createFood/${item.id}`)
        },1000);
    };

useEffect(()=>{
    const unsubscribe = onSnapshot(collection(db,"Food"), (snapshot)=>{
        const FoodList =snapshot.docs.map(doc=>({
            id:doc.id,
            ...doc.data()
        }));
        setViewFood(FoodList);
});
return unsubscribe;
},[])

const handleDelete = async (id) =>{
    try{
        await deleteDoc(doc(db,"Food",id));
        setViewFood(viewFood.filter((Food)=> Food.id !==id));
        toast.success("Menu Deleted Successfully!")
    }catch (error){
        console.log(error);
        toast.error("Error Deleting Menu")
    }
};

    return(
<>
<div className="Food">
 <h2 className="data">Menu List</h2>
 <button className="ANP-btn" onClick={()=> navigate ("/createfood")}> Add New Food</button>
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
                <tr key={index}>
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
<ToastContainer/>
 </>
    );
};