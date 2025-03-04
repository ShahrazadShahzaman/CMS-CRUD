import { useState } from "react";
import { db } from "../../firebase/config";
import { useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";

export const FoodList = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "food"), (snapshot) => {
      const foodList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("Food Data", foodList);
      setFoods(foodList);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <div className="row g-4">
        {foods.map((food) => (
          <div key={food.id} className="col-lg-6">
            <div className="d-flex align-items-center">
              <img
                src={food.imageUrl}
                alt={food.name}
                className="flex-shrink-0 img-fluid rounded"
                style={{ height: "80px", width: "80px", objectFit: "cover" }}
              />
              <div className="d-flex w-100 flex-column text-start ps-4">
                <h5 className="d-flex justify-content-between border-bottom pb-2">
                  <span>{food.name}</span>
                  <span className=" text-primary">PKR. {food.price}</span>
                </h5>
                <small className="fst-italic">{food.description}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
