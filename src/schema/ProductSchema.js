import * as z from 'zod';
const ProductSchema = z.object({
    title: z.string().min(5).max(100),
    price: z.number().min(0),
    description:z.string().min(5).max(1000).optional()
  }); 
  export default ProductSchema;