
import React, { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import instance, { getProducts } from "./axios/index.js";
import Dashboard from "./pages/admin/Dashboard.jsx";
import ProductForm from "./pages/admin/ProductForm.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import ProductEdit from "./pages/admin/ProductEdit.jsx";
import Register from "./pages/Register.jsx";
import AuthForm from "./pages/AuthForm.jsx";
import PrivateRoute from "./pages/PrivateRoute.jsx";

function App() {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();


  //   const handleSubmit =(data)=>{
  //     console.log(data);
  //     ( async ()=>{
  //       try {
  // if(data.id){
  //   const res = await instance.post("/products",data);
  //   console.log(res.data);
  //   setProduct([...product,res.data]);
  // }

  //         if(confirm(' Them san pham thanh cong')){
  //           navigate('/admin');
  //         }

  //       } catch (error) {
  //         console.log(error);
  //       }
  //     })();

  // };
  // const handleSubmitEdit =(data)=>{
  //   console.log(data);
  //   ( async ()=>{
  //     try {
  //        await instance.patch(`/products/${data.id}`,data);
  //       // console.log(res.data);
  //       const newData = await getProducts()
  //       console.log(newData);

  //       setProduct(newData);

  //       if(confirm(' Sua san pham thanh cong')){
  //         navigate('/admin');
  //       }

  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();

  // }

  // const removeProduct = (id) => {
  //   (async () => {
  //     try {
  //       if (confirm('Ban muon xoa khong ?')) {
  //         await instance.delete(`/products/${id}`);
  //         // ex1
  //         const newData = product.filter(item => item.id !== id && item);
  //         //ex2
  //         //  const EXP2 = await instance.get('/products');
  //         setProduct(newData);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // }
  return (
    <>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/home" element={<Navigate to="/" />} />

          <Route path="/about" element={<AboutPage />} />

          <Route path="/product" element={<ProductPage />} />

          <Route path="/login" element={<AuthForm />} />

          <Route path="/register" element={<AuthForm isRegister />} />


          <Route path="/product-detail/:id" element={<ProductDetail />} />

          <Route path="/admin" element={<PrivateRoute />} >

            <Route path="/admin" element={<Dashboard />} />

            <Route
              path="/admin/product-form"
              element={<ProductForm />}
            />

            <Route
              path="/admin/product-form/:id"
              element={<ProductForm />}
            />


          </Route>
          <Route path="*" element={<PageNotFound />} />
         
        </Routes>
      </main>
      <Footer />
    </>
  );
}
export default App;
