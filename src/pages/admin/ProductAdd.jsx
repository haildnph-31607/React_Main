import React from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import ProductSchema from '../../schema/ProductSchema';

  
const ProductForm =({onAdd})=>{
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver:zodResolver(ProductSchema),
      });
      const onSubmit = (data)=>{
        console.log(data);
        onAdd(data)
      }
//    const {id} = useParams();
    //   console.log(id);
      return (
        <>  
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>ADD PRODUCTS</h1>
            <div className="form-group w-100">
                <label htmlFor="title"  className='form-label'>Title</label>
                <input type="text" className='form-control' id="title" {...register('title',{required:true})}/>
                {errors.title?.message && <p className='text-danger'>{errors.title?.message}</p>}
            </div>
            <div className="form-group w-100">
                <label htmlFor="price" className='form-label'>Price</label>
                <input type="number" className='form-control' id="price"  {...register('price',{required:true , valueAsNumber:true})}/>
                {errors.price?.message && <p className='text-danger'>{errors.price?.message}</p>}

            </div>
            <div className="form-group w-100 mb-3">
                <label htmlFor="description"  className='form-label'>Description</label>
                <input type="text" className='form-control' id="description"  {...register('description')}/>
                {errors.description?.message && <p className='text-danger'>{errors.description?.message}</p>}

            </div>
            <button className='btn btn-success w-100'>Add Product</button>
        </form>
        </>
      )
}
export default ProductForm;