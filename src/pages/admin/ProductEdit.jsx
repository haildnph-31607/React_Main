import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import ProductSchema from "../../schema/ProductSchema";
import instance from "../../axios";
import { useParams } from "react-router-dom";

const ProductEdit = ({ onEdit }) => {
    const {id} = useParams();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm(
    {resolver:zodResolver(ProductSchema)}
  );
  useEffect(()=>{
  (async()=>{
    try{
        const {data} = await instance.get(`products/${id}`);
        console.log(data);
        reset(data);
    }catch(error){
         console.log(error);
    }
  })();
  },[])
  const onSubmit = (data)=>{
    onEdit({...data,id});
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>EDITS PRODUCTS</h1>
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
        <button className="btn btn-success w-100">Add Product</button>
      </form>
    </>
  );
};

export default ProductEdit;
