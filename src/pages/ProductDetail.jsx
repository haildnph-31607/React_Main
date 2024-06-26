import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import instance from '../axios';
// import { Link } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();
    // console.log(id);
    const [product, setProduct] = useState({});
    useEffect(() => {
        (async () => {
            const { data } = await instance.get(`/products/${id}`);
            console.log(data);
            setProduct(data)
        })();
    }, []);
    console.log(product);

    return (
        <>
            <h1>Chi tiết sản phẩm</h1>
            <div className="row">
                <div className="col-6 col-md-6 ">
                    <img src={product.thumbnail} alt="" />
                </div>
                <div className="col-12 col-md-6">
                    <h1>{product.title}</h1>
                    <p>Price : {product.price}</p>
                    <p>Description : {product.description}</p>
                    <p>Brand : {product.brand}</p>
                    <p>Category : {product.category}</p>

                    <button className="btn btn-primary w-100">Mua Ngay</button>
                </div>
            </div>
        </>
    )
}

export default ProductDetail
