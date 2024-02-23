import React from "react";
import Nav from "./components/Nav";
import Main from "./view/main"
import Aside from "./view/aside"
import SemiFooter from "./view/semifooter";
import MemberShips from "./view/memberships";
import Footer from "./view/footer";
export default function App(){
  return(
    <div className="bg-black font-Nunito w-full h-full ">
      <Nav />
      <Main />
      <Aside />
      <SemiFooter />
      <MemberShips />
      <Footer />
    </div>
  )
}