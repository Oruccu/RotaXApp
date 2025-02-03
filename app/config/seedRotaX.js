import { db } from "./firebase"; 
import { collection, addDoc } from "firebase/firestore";
import { seedData } from "./seedData"; 

export const seedTripsToFirestore = async () => {
  try {
    const rotaXCollectionRef = collection(db, "rotaX");

    for (const trip of seedData) {
      await addDoc(rotaXCollectionRef, trip);
    }

    console.log("Veriler Firestore'a başarıyla yüklendi!");
  } catch (error) {
    console.error("Veri yükleme sırasında hata oluştu:", error);
  }
};
