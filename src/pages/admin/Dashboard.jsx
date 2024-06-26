import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext';
import instance from '../../axios';
const Dashboard =()=>{
const {state,dispatch} = useContext(ProductContext);
const handleDelete = async(id)=>{
   try {
    if(confirm('Are you sure')){
        await instance.delete(`/products/${id}`);
    dispatch({type:"DELETE_PRODUCTS",payload:id})   
    }
   } catch (error) {
    console.log(error);
   }
}

    return (
        <React.Fragment>
            <header>
                <h1>Hello Admin</h1>
                <form action="" className='d-flex w-25 align-items-center '>
                    <input type="text" className='form-control w-75'/>
                    <button className='btn btn-success'>Search</button>
                </form>
            </header>
            <div className="row">
                
                <div className="col-3">
                    {/* <ul>
                        <li>
                            <Link to=''>Dashboard</Link>
                        </li>
                        <li>
                            <Link to=''>Category</Link>
                        </li>
                        <li>
                            <Link to=''>Users</Link>
                        </li>
                    </ul> */}
                </div>
                
            </div>
            

            <div className="col-9 w-100">
            <Link to='/admin/product-form' className='btn btn-primary '>Thêm Sản Phẩm Mới</Link>
                <table className='table table-responsive-md table-striped table-dark'>
                    <thead>
                        <th>ID</th>
                        <th>TITLE</th>
                        <th>PRICE</th>
                        <th>Thumail</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        {state.products.map((p)=>(
                            <tr>
                              <td>{p.id}</td>
                              <td>{p.title}</td>
                              <td>{p.price}</td>
                              <td>
                                
                               {p.thumbnail ?  <img src={p.thumbnail} alt={p.title} /> : ' Dang cap nhap'}
                              </td>
                              <td>
                                <Link to={`/admin/product-form/${p.id}` } className='btn btn-warning'>Edit</Link>
                                 <button className="btn btn-danger" onClick={() => handleDelete(p.id)}>Del</button>
                              </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    )
}
export default Dashboard;