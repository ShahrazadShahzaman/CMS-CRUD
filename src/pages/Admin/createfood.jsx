import { useEffect, useState} from "react";
import { db } from "../../firebase/config";
import { ToastContainer,toast } from "react-toastify";
import { collection , doc ,addDoc ,getDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./food.css"

export const CreateFood =()=>{
    const [food,setFood]=useState({
        name:'',
        price:'',
        description:''
});
const [loading,setLoading]=useState(false);
const navigate =useNavigate();
const params =useParams();
console.log("Food ID received:", params.foodId);

const [fileUpload, setFileUpload] = useState({
    file:null,
    upload_preset:"food_images"
});
const [previewImage,setPreviewImage]=useState(null);

useEffect(()=>{
    if (params?.foodId){
        console.log("food ID:", params.foodId);
        setLoading (true);

    const fetchfood = async () => {
    try{
      if (!params.foodId){
        console.log("no valid food id, skipping fetch");
        return;
      }
        const foodRef = doc(db, "food" ,params.foodId);
        const docSnap = await getDoc(foodRef);

        if(docSnap.exists()){
        setFood({...docSnap.data()});
        setPreviewImage(docSnap.data().imageUrl || null);
    }else{
        console.log ("Food not found , skipping Navigation");
      }
    }catch (error){
        console.error("Error fetching food:", error);
        toast.error("failed to fetch food,try again");
}finally{
        setLoading(false);
    }
};
fetchfood();
}else {
    console.log ("No Food ID found.Creating a new food item");
    setFood({name:'',price:'',description:''});
    setPreviewImage(null);
}
}, [params.foodId]);

const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
        setFileUpload(prevState=>({
            ...prevState,
            file: file
        }));
        const reader = new FileReader();
        reader.onload = () => {
            setPreviewImage(reader.result);
            setFood(prevfood =>({...prevfood, imageUrl: reader.result}));
        };
        reader.readAsDataURL(file);
    }
    console.log("Selected file:", file);

};

const handleSubmit=async(e)=>{
    e.preventDefault();
    setLoading(true);
    console.log("Submitting form...")

if(!food.name || !food.price || !food.description){
    console.log("Form fields missing, preventing submission!");
    toast.error("Please fill all the fields");
    setLoading(false);
    return;
}
    try {
        let imageUrl = food.imageUrl|| null;
        const API_URL = process.env.REACT_APP_CLOUDINARY_API;
        if(!API_URL){
           toast.error("Image Upload API is missing!");
           setLoading(false);
           return;
        }        
        if(fileUpload.file){
        console.log("Uploading file:", fileUpload.file.name);
        const formData = new FormData();
        formData.append("file", fileUpload.file);
        formData.append("upload_preset", fileUpload.upload_preset);

        const response = await axios.post(`${API_URL}`, formData, {
            headers: { "Content-Type": "multipart/form-data" }
        });
        console.log("Cloudinary response:", response.data);

        if (response.status === 200) {
            imageUrl = response.data.secure_url;
            console.log("Image URL:", imageUrl);
            setPreviewImage(imageUrl);
        }
    }
        if (params.foodId){
            const foodRef = doc (db, "food" ,params.foodId);
            console.log("Fetching Document From Firestore:" , foodRef);
        await updateDoc(foodRef,{
             name:food.name,
             price:food.price,
             description:food.description,
            ...(imageUrl ? {imageUrl}:{}),
            });
            console.log ("Updated Food Document");
            toast.success("Food Updated Successfully!");
            setTimeout(()=>{

                navigate("/admin/viewfoods");
            },1500);
            setLoading(false);
            }
    else{
    await addDoc(collection(db, 'food'),{
        name:food.name,
        price:food.price,
        description:food.description,
        imageUrl:imageUrl || "",
    });
    setFood({ name: '', price: '', description: ''});
    setFileUpload({file: null , upload_preset: "food_images"});
    setPreviewImage(null);
    toast.success("Food Added Successfully!");
    setTimeout(() => {
        navigate("/admin/viewfoods");
    }, 2000);
}
}catch(error){
    toast.error("Error Adding Food Data");
    console.log(error);
}finally{
    setLoading(false);
}
}
const handleChange=(e)=>{
const {name,value}=e.target;
setFood((prevfood)=>({
    ...prevfood,
    [name]:value
}));
}
return(
    <>
    <div className="Food">
        <h2 className="create-data">Create Data</h2>
           <form className="formdata" onSubmit={handleSubmit}> 
            <div className="form-group">
                <label>Name</label>
                <input className="texts" type="text" name="name" placeholder="Enter The Food Name" value={food.name} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label>Price</label>
                <input className="texts" type="number" name="price"  placeholder="Enter The Food Price" value={food.price} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label>Description</label>
                <input className="texts"  type="text" name="description"  placeholder="Enter The Description" value={food.description} onChange={handleChange}/>
            </div>
            <label> Upload image</label>
                <input type="file" name="file" accept="image/jpg, image/png" onChange={handleFileUpload} />
                <br /><br />
                {previewImage && (
                    <img src={previewImage} alt="Uploaded" width={200} height={200} />
            )}
                <div>
                <button className="submitbtn" type="submit">{loading ? "Submitting..." : "Submit"}</button>
            </div>
    </form>
     </div>
    </>
);
};