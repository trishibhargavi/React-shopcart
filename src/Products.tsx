import React from "react";
import Product from "./Product";
import Card from "react-bootstrap/Card";
import { Grid } from "@material-ui/core";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import {addCart, delCart } from "./redux/actions";
import { useDispatch } from 'react-redux';

const Products = () => {
    const [data, setData] = useState([] as any);
    
    const [loading, setLoading] = useState(false);
    const [cartBtn, setCartBtn] = useState("Add to Cart");

    useEffect(() => {
        
        fetch("https://fakestoreapi.com/products?limit=5")
        .then((response) => response.json())
        .then((value) => {
            setData(value)
            setLoading(false);
        })
    }, [])
    console.log(data);
    const Loading = () => {
        return (
            <>
            Loading....
            </>
        )
    } 
    
    
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

    const ViewProducts = () => {
        return (
            <>
            {data.map((product : any) => {
                return (
                    <>
                      
                      <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4" key={product.id}>
                  <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
                  <div className="card-body">
                    <h5 className="card-title mb-0">{product.title.substring(0,12)}...</h5>
                    <p className="card-text lead fw-bold">
                      ${product.price}
                    </p>
                    <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">
                      Details
                    </NavLink>
                    <br/><br/>
                    <button className="btn btn-outline-dark px-4 py-2" onClick={()=>addProduct(product)}>
                        Add to Cart
                        <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              </div>
                    
                        </>
                )
            })}
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
export default Products;