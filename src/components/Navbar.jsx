import React from "react";
import { auth } from "../fb";
import { useAuthState } from "react-firebase-hooks/auth";
import Signin from "./Signin";
import Logout from "./Logout";

const style = {
  nav: `bg-gray-800 h-20 flex justify-between items-center p-4`,
  heading: `text-white text-3xl`,
};

function Navbar() {
  const [user] = useAuthState(auth);
  console.log(user);

  return (
    <div className={style.nav}>
      <h1 className={style.heading}>Chat</h1>
      {user ? <Logout /> : <Signin />}
    </div>
  );
}

export default Navbar;
