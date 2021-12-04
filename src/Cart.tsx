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
                    <h6 className="my-0 justify-content-left">{item.title}</h6>
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
                <div className="view px-2 my-3 rounded-3 py-5">
                {/* <div className="py-4"> */}
                    <div className="col-md-8 row justify-content-center">
                        <div className="col-md-3"><br/>
                        <button className="btn btn-outline-dark me-4" 
                            onClick={()=>handleDel(product)}>
                                <i className="fa fa-times"></i>
                            </button>
                            <img src={product.image} alt={product.title} height="200px" width="150px" style={{paddingTop:50}}/>
                            
                        </div>
                        <div className="col-md-3" style={{paddingTop:50}}>
                            <h3>{product.title}</h3>
                            
                            <p className="lead fw-bold">
                                Price:{product.qty} X ${product.price} = ${product.qty * product.price}
                            </p>
                            <button className="btn btn-outline-dark me-4" onClick={()=>handleDel(product)}>
                                <i className="fa fa-minus"></i>
                            </button>
                            <span>Quantity</span>&emsp;
                            <button className="btn btn-outline-dark me-4" onClick={()=> handleAdd(product)}>
                                <i className="fa fa-plus"></i>
                            </button>
                            
                        
                    </div>
                </div>
            </div>
            </>
        )

    }
    

    
    return (
        <div>
            <div className="cart text-center col-md-3 mb-3 pb-2 border-bottom">
                <h1>Checkout</h1>
                {state.map(itemList)}<hr/>
                <h2 className="h6 mb-3 pb-1">Total : <strong>${total.toFixed(2)}</strong></h2>
                
            </div>
            
            {state.length!==0 && state.map(ViewProducts)}
            {state.lemgth===0 && emptyCart()}
        </div>
    );
}

export default Cart;