import { addDoc, collection, getDocs } from "firebase/firestore";
import { firestore } from "./init";

export const addEstate = async (estate) =>{
  try {
    await addDoc(collection(firestore, 'estates'), {
      city: estate.city,
      street: estate.street,
      description: estate.description,
      price: estate.price,
      bedrooms: estate.bedrooms
    });
  } catch (error) {
    console.error({error});
  }
}

export const getAllEstates = async () => {
  const estates = [];
  const querySnapshot = await getDocs(collection(firestore, "estates"));
  querySnapshot.forEach((doc) => {
    estates.push(doc.data());
  });
  return estates;
}