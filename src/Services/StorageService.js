import { collection, setDoc } from "firebase/firestore";

async function createPayement(data) {
  // {
  //   type:"In" || "out ",
  //   reciever:"" OR sender:"",
  //   amount:5000,
  //   object
  //   dateTimeStamp: 25 Mai 2022,
  //   cardId:""
  // }

  try {
    const docRef = await setDoc(collection(db, "payements"), {
      data,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
async function createCreditCard(data) {
  try {
    // {
    //   cardId :"",
    //   expDate:"",
    //   Balence:""
    //   ATMLimit,
    //   PurchaseLimit,
    //   Pin,
    //   status:"Active" OR "Blocked"
    // }
    const docRef = await setDoc(collection(db), {
      data,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export default {
  createPayement,
  createCreditCard,
};
