import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod';
import instance from '../axios';
import { useNavigate } from 'react-router-dom';



const Register = () => {
    const navigate = useNavigate();
    const schema = z.object({
        email:z.string().email(),
        password:z.string().min(6),

    })
    const { register, handleSubmit, formState: { errors } } = useForm(
       { resolver: zodResolver(schema)}
    );
    const onSubmit = (data) =>{
        // console.log(data);
        (async()=>{
            try {
              const res = await instance.post('/register',data);
              console.log(res);
              if(confirm('Dang ki thanh cong ! Ban muon den trang dang nhap chu ?')){
                navigate('/login')
              }

            } catch (error) {
                console.log(error);
                alert(error.response.data || "Đăng kí thất bại !"
        
                )
            }
        })();
    }
    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Register</h1>
                <div className="mb-3">
                    <label htmlFor="email" className='form-label'>Email</label>
                    <input type="email" className="form-control" {...register("email")}/>
                    {errors.email && <p className='text-danger'>{errors.email.message}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className='form-label'>
                Password</label>
                    <input type="password" className="form-control" {...register("password")}/>
                    {errors.password && <p className='text-danger'>{errors.password.message}</p>}
                </div>
                <button className='btn btn-success w-100' type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Register
