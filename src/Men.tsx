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

const Men = () => {
    const [data, setData] = useState([] as any);
    
    const [loading, setLoading] = useState(false);
    

    useEffect(() => {
        
        fetch("https://fakestoreapi.com/products/category/men's clothing")
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
                      Buy Now
                    </NavLink>
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
                    <h1 className="display-6 fw-bolder text-left">Men's Collection</h1>
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
export default Men;