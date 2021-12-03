import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import {addCart, delCart } from "./redux/actions";


const Product = () => {
    const {id} = useParams();
    const [cartBtn, setCartBtn] = useState("Add to Cart");
    const [product, setData] = useState([] as any);
    const [loading, setLoading] = useState(false);

    
    

    useEffect(() => {
        
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((response) => response.json())
        .then((value) => {
            setData(value)
            setLoading(false);
        })
    }, [])
    console.log(product);

    const dispatch = useDispatch();
    
    const addProduct = (product:any)=> {
        if(cartBtn === "Add to Cart")
        {
        dispatch(addCart(product));

        setCartBtn("Remove form Cart")
        }
        else {
            dispatch(delCart(product))
            setCartBtn("Add to Cart")
        }
    }

    const Loading = () => {
        return(
            <>
                Loading....
            </>
        )
    }


    const ViewProducts = () => {
        return (
            <>
            
                      
                      <div className="col-md-6">
                    <img src={product.image} alt={product.title} height="300px" width="300px" />
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">
                        {product.category}
                    </h4>
                    <h1 className="display-5">{product.title}</h1>
                    <hr/>
                    <p className="lead fw-bolder">
                        Rating {product.rating && product.rating.rate} 
                        <i className="fa fa-star"></i>
                    </p>
                    <h3 className="display-6 fw-bold my-4">
                        $ {product.price}
                    </h3>
                    <p className="lead">{product.description}</p>
                    <button className="btn btn-outline-dark px-4 py-2" onClick={()=>addProduct(product)}>
                        Add to Cart
                        <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
                    </button>
                    &emsp;&emsp;&emsp;&emsp;
                    <NavLink to="/cart" className="btn btn-outline-dark ms-2 px-3 py-2">
                        Go to Cart
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    </NavLink>
                </div>
                    
                        
        </>
        
    )}
   return (
       <>
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-12 text-center">
                    <h1 className="display-6 fw-bolder text-center">PRODUCTS</h1>
                    <hr/>
                    <div className="row justify-content-center">
                        {loading ? <Loading/> : <ViewProducts />}
                    </div>
                </div>
            </div>
        </div>
    </>
   )

}
export default Product;