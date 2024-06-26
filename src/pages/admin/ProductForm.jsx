import { zodResolver } from "@hookform/resolvers/zod";
// import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import ProductSchema from "../../schema/ProductSchema";
import instance from "../../axios";
import {  useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
import React ,{ useEffect ,useContext} from "react";
// import ProductForm from "./ProductAdd";

const ProductForm = () => {
  const { dispatch } = useContext(ProductContext);
  const { id } = useParams();
  const nav = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm(
    { resolver: zodResolver(ProductSchema) }
  );
  if (id) {
    useEffect(() => {
      (async () => {
        try {
          const { data } = await instance.get(`products/${id}`); 
          reset(data);
        } catch (error) {
          console.log(error);
        }
      })();
    }, [])
  }


  const onSubmit = (data) => {
    // console.log(data);
    (async () => {
      try {
        if (id) {
          await instance.patch(`/products/${id}`, data);
          dispatch({ type: "EDIT_PRODUCTS",id,...data })

        } else {
          const  res  = await instance.post("/products", data);
          dispatch({ type: "ADD_PRODUCTS", payload: res.data })
        }
        if (confirm("successfuly")) {
          nav("/admin");
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };
  return (
    <>
      <form onSubmit={handleSubmit((data) => onSubmit({ ...data, id }))}>
        <h1>{id ? 'EDITS PRODUCTS' : 'ADD PRODUCTS'}</h1>
        <div className="form-group w-100">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            {...register("title", { required: true })}
          />
          {errors.title?.message && (
            <p className="text-danger">{errors.title?.message}</p>
          )}
        </div>
        <div className="form-group w-100">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            {...register("price", { required: true, valueAsNumber: true })}
          />
          {errors.price?.message && (
            <p className="text-danger">{errors.price?.message}</p>
          )}
        </div>
        <div className="form-group w-100 mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            {...register("description")}
          />
          {errors.description?.message && (
            <p className="text-danger">{errors.description?.message}</p>
          )}
        </div>
        <button className="btn btn-success w-100">{id ? 'EDITS PRODUCTS' : 'ADD PRODUCTS'}</button>
      </form>
    </>
  );
};

export default ProductForm;
