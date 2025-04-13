import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./Componants/Header";
import Product from "./Componants/Product";
import Home from "./Componants/Home";
import Login from "./Componants/Login";
import Register from "./Componants/Register";

function App() {
  return (
    <>
      <Header></Header>
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/products" element={<Product></Product>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
