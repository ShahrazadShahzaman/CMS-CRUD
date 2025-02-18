import { useEffect, useState} from "react";
import { db } from "../../firebase/config";
import { ToastContainer,toast } from "react-toastify";
import { collection , doc ,addDoc ,getDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

export const CreateFood =()=>{
    const [food,setFood]=useState({
        name:'',
        price:'',
        description:''
    });
const [loading,setLoading]=useState(false);
const navigate =useNavigate();
const {FoodId} =useParams();

const [fileUpload, setFileUpload] = useState({
    file:null,
    upload_preset:"food_images"
});
const [previewImage,setPreviewImage]=useState(null);

useEffect(()=>{
    if (FoodId){
        const fetchFood = async () => {
        const FoodRef = doc(db, "Food" ,FoodId);
        const docSnap = await getDoc(FoodRef);
    if(docSnap.exists()){
        setFood({...docSnap.data()});
    }else{
        toast.error("Food not found")
        navigate ("/viewFood");
      }
 };
    fetchFood();
  }
}, [FoodId,navigate]);
const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
        setFileUpload(prevState=>({
            ...prevState,
            file: file
        }));
    }
};
const API_URL = process.env.REACT_APP_CLOUDINARY_API;
const handleSubmit=async(e)=>{
    e.preventDefault();
    setLoading(true);
    try {
        let imageUrl = null;
        if(fileUpload.file){
        const formData = new FormData();
        formData.append("file", fileUpload.file);
        formData.append("upload_preset", fileUpload.upload_preset);

        const response = await axios.post(API_URL, formData, {
            headers: { "Content-Type": "multipart/form-data" }
        });

        if (response.status === 200) {
            imageUrl = response.data.secure_url;
            setPreviewImage(imageUrl);
        }
        if (FoodId){
            const FoodRef = doc (db, "Food" ,FoodId);
            await updateDoc(FoodRef,{
             name:food.name,
             price:food.price,
             description:food.description,
             imageUrl: imageUrl
            });
            toast.success("Food Updated Successfully!",{
                autoClose:1000,
                onClose:()=>navigate("/viewFood")
            });
            }

            // await addDoc(collection(db, "food_images"), {
            //     imageUrl: imageUrl,
            //     uploadedAt: new Date()
            // });
            // console.log("Image URL stored in Firestore:", imageUrl);
        }
    // } catch (error) {
    //     console.log(error);
    // }
    // setLoading(true);  
    else{
    await addDoc(collection(db, 'Food'),{
        name:food.name,
        price:food.price,
        description:food.description,
        imageUrl:imageUrl
    });
    setFood({ name: '', price: '', description: ''});
    setPreviewImage(null);
    toast.success("Food Added Successfully!",{
            autoClose:1000,
            onClose:()=>navigate("/viewFood")
        });
}
}catch(error){
    toast.error("Error Adding Food Data");
    console.log(error);
}finally{
    setLoading(false);
}
};
const handleChange=(e)=>{
const {name,value}=e.target;
setFood((prevFood)=>({
    ...prevFood,
    [name]:value
}));
}
return(
    <>
    <div className="Food">
        <h2 className="create data">Create Data</h2>
           <form className="formdata" onSubmit={handleSubmit}> 
            <div className="form-group">
                <label>Name</label>
                <input className="texts" type="text" name="name" placeholder="Enter The Food Name" value={food.name} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label>Price</label>
                <input className="texts" type="text" name="price"  placeholder="Enter The Food Price" value={food.price} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label>Description</label>
                <input className="texts"  type="text" name="description"  placeholder="Enter The Description" value={food.description} onChange={handleChange}/>
            </div>
            <div>
                <button className="submitbtn" type="submit" disabled={loading}>
                    {loading ? 'Loading...' : 'Submit'}
                </button>
            </div>
            <label> Upload image</label>
                <input type="file" accept="image/jpg, image/png" onChange={handleFileUpload} />
                <br /><br />
                {/* <button onClick={handleSubmit}>Submit</button> */}
                {previewImage && (
                <img src={previewImage} alt="Uploaded" width={200} height={200} />
            )}
    </form>
     </div>
        <ToastContainer/>
    </>
);
};