import * as React from "react";
// import * as firebase from "firebase";
import app from "../config/firebase";
import { db } from "../config/firebase";
import { getAuth, getApp } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

import {
  PhoneAuthProvider,
  signInWithCredential,
  signOut,
} from "firebase/auth";

async function signIn(phoneNumber, recaptchaVerifier, navigation) {
  const auth = getAuth(app);
  const phoneProvider = new PhoneAuthProvider(auth);
  console.log(phoneProvider);

  await phoneProvider
    .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
    .then((verificationCode) => {
      console.log("verificationCode :", verificationCode);
      navigation.navigate("Verification", {
        code: verificationCode,
        phoneProvider,
      });
    })
    .catch((err) => {
      console.log(err);
      return;
    });
}

async function verifyCode(navigation, verificationId, verificationCode) {
  const auth = getAuth(app);
  console.log({ verificationId, verificationCode });
  const credential = PhoneAuthProvider.credential(
    verificationId,
    verificationCode
  );
  console.log(credential);
  await signInWithCredential(auth, credential)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}
const logout = () => {
  const auth = getAuth(app);
  signOut(auth)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

const createUserProfile = (uid,email, adresse, fullName, dob, gender,creditCard) => {
  console.log({uid,email, adresse, fullName, dob, gender,creditCard})
  setDoc(doc(db, "users", uid), {
    email,
    adresse,
    fullName,
    dob,
    gender,
    cards: creditCard,
    transactions:[],
    balence:0,
    profilePic:null
  })
    .then(() => {
      console.log("Document has been added successfully");
    })
    .catch((error) => {
      console.log(error);
    });
};
export const authService = {
  signIn,
  logout,
  verifyCode,
  createUserProfile,
};
