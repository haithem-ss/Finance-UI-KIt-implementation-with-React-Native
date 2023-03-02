import * as React from 'react';
import * as firebase from "firebase";
import { getAuth, signInWithPhoneNumber } from "firebase/auth";

async function signIn(recaptchaVerifier) {
  const phoneNumber = "+213541018963";

  const auth = getAuth();
  signInWithPhoneNumber(auth, phoneNumber, appVerifier)
  .then((res)=>console.log(res))
  const phoneProvider = new firebase.auth.PhoneAuthProvider();
  const verificationId = await phoneProvider.verifyPhoneNumber(
    phoneNumber,
    recaptchaVerifier.current
  );
  console.log("verificationId : ",verificationId)
  return verificationId
}
async function verifyCode(user, code){
  try{
    await user.confirm(code);
    return true;
  }catch(err){
    console.log(err)
    return false
  }
}
const signUp = (email, _password) => {};
const logout = () => {};
export const authService = {
  signIn,
  signUp,
  logout,
  verifyCode
};

const JWTTokenMock =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikx1Y2FzIEdhcmNleiIsImlhdCI6MTUxNjIzOTAyMn0.oK5FZPULfF-nfZmiumDGiufxf10Fe2KiGe9G5Njoa64";
