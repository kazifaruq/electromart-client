import React, { useContext } from "react";
import { EletroContext } from "./Context";

const Home = () => {
  const {MyName}=useContext(EletroContext)
  console.log(MyName);
  return <div>
    <h1>Hello frm home</h1>
  </div>;
};

export default Home;
