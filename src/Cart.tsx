import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { NavLink } from 'react-router-dom';
import {addCart, delCart } from "./redux/actions";
import handleCart from './redux/reducer/handleCart';


const Cart = () => {
    const state = useSelector((state:any)=> state.handleCart)
    const dispatch = useDispatch()

    const handleAdd = (item:any) => {
        dispatch(addCart(item))
    }
    const handleDel = (item:any) => {
        dispatch(delCart(item))
    }

    var total = 0;
    const itemList = (item:any) => {
        total = total + item.price * item.qty;
        return (
            <li className="list-group-item d-flex">
                <div>
                    <h6 className="my-0">{item.title}</h6>
                </div>&emsp;&emsp;
                <span className="text-muted">qty:{item.qty}</span>
                &emsp;&emsp;
                <span className="text-muted">${item.price}</span>
            </li>
        );
    }

    const emptyCart = () => {
        return(
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                </div>
            </div>
        )
    }
    const ViewProducts = (product:any) => {
        return(
            <>
                <div className="px-10 my-2 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={product.image} alt={product.title} height="250px" width="200px" />
                        </div>
                        <div className="col-md-4">
                            <h3>{product.title}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<button className="btn btn-outline-dark me-4" 
                            onClick={()=>handleDel(product)}>
                                <i className="fa fa-times"></i>
                            </button></h3>
                            
                            <p className="lead fw-bold">
                                Price:{product.qty} X ${product.price} = ${product.qty * product.price}
                            </p>
                            <button className="btn btn-outline-dark me-4" onClick={()=>handleDel(product)}>
                                <i className="fa fa-minus"></i>
                            </button>
                            <span>Quantity</span>&emsp;&nbsp;
                            <button className="btn btn-outline-dark me-4" onClick={()=> handleAdd(product)}>
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )

    }
    const buttons = () => {
        return(
            <>
                <div className="container">
                    <div className="row">
                        <NavLink to="/checkout" className="btn btn-outline-dark mb-5 w-25 mx-auto">
                            Proceed to Checkout
                        </NavLink>
                    </div>
                </div>
            </>
        )
    }


    
    return (
        <div>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(ViewProducts)}
            <div className="container p-3 my-3">
                <div className="d-flex mb-3">
                    <div className="col-md-5 col-lg-4 order-md-last">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-secondary">Your cart</span>
                            <span className="badge bg-primary rounded-pill">{state.length}</span>
                        </h4>
                        <ul className="list-group mb-3">
                            {state.map(itemList)}
                           <br/>
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total (USD)</span>
                                <strong>${total.toFixed(2)}</strong>
                            </li>
                        </ul>
                   </div>

                    </div>    
            </div>
            
            
        </div>
    );
}

export default Cart;