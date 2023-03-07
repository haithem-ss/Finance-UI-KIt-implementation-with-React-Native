import { collection, setDoc, updateDoc } from "firebase/firestore";
import React from "react";
import { AppContext } from "../Routes";
async function createPayement(data, userRef) {
  // {
  //   type:"In" || "out ",
  //   reciever:"" OR sender:"",
  //   amount:5000,
  //   object
  //   dateTimeStamp: 25 Mai 2022,
  //   cardId:""
  // }
  data["active"] = true;
  const mydoc = doc(db, "users", "DC");

  await updateDoc(userRef, {
    card: data,
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
  // try {
  //   const docRef = await setDoc(collection(db, "payements"), {
  //     data,
  //   });
  //   console.log("Document written with ID: ", docRef.id);
  // } catch (e) {
  //   console.error("Error adding document: ", e);
  // }
}

async function blockCard(uid) {}
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
    const docRef = await setDoc(collection(db, "cards"), {
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
