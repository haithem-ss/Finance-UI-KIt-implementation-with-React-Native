import { collection, addDoc } from "firebase/firestore";

async function createPayement(data) {
  try {
    const docRef = await addDoc(collection(db, "payements"), {
      data,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
async function createCreditCard(data) {
    try {
      const docRef = await addDoc(collection(db, "payements"), {
        data,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
}

export default {
    createPayement,
    createCreditCard
}
