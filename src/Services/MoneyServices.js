import { doc, updateDoc, increment, arrayUnion } from "firebase/firestore";
import { db } from "../config/firebase";
import React from "react";
import { Alert } from "react-native"
async function requestMoney(user, amount, updateState) {
  console.log({
    sender: "Bank",
    receiver: user.fullName,
    amount: amount,
  });
  const userRef = doc(db, "users", user.uid);
  await updateDoc(userRef, {
    balence: increment(amount),
    transactions: arrayUnion({
      sender: "Bank",
      amount: amount,
      date: new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(new Date()),
    }),
  })
    .then(() => updateState(user.uid))
    .catch(() => console.log("There was an error"));
}
async function createTransaction(uid, user, receiver, amount, balence, updateState) {
  console.log(amount)
  if (amount > balence) return Alert.alert("Not Sufficient Balence")
  if (isNaN(amount)  ) return Alert.alert("Please Provide a valid amount")
  const userRef = doc(db, "users", uid);
  await updateDoc(userRef, {
    balence: increment(-1 * amount),
    transactions: arrayUnion({
      sender: receiver.fullName,
      amount: -1 * amount,
      date: new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(new Date()),
    }),
  })
    .then(() => {
      console.log("Done with First Transaction");
    })
    .catch((e) => console.log(e));
  console.log(receiver.uid)
  const receiverRef = doc(db, "users", receiver.uid);
  await updateDoc(receiverRef, {
    balence: increment(amount),
    transactions: arrayUnion({
      sender: user.fullName,
      amount: amount,
      date: new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(new Date()),
    }),
  })
    .then(() => {
      console.log("Done With The Second Transaction");
      updateState(uid);
    })
    .catch((e) => console.log(e));
}

export default {
  createTransaction,
  requestMoney,
};