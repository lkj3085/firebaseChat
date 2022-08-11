import React from "react";
import { auth } from "../fb";

const style = {
  button: `bg-gray-200 px-4 py-2 hover:bg-gray-100`,
};

const signOut = () => {
  signOut(auth);
};

function Logout() {
  return (
    <button onClick={() => auth.signOut()} className={style.button}>
      LogOut
    </button>
  );
}

export default Logout;
