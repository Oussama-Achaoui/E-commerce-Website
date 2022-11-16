import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addCart,delCart } from '../redux/action';


export default function Cart() {
    const state = useSelector((state)=> state.handleCart);
    const dispatch = useDispatch();
    const addProduct = (product)=> {
        if(product.rating.count>product.qty){
            dispatch(addCart(product));
        }      
    }
    const delProduct = (product)=> {
        if(product.rating.count>product.qty){
            dispatch(delCart(product));
        }      
    }
    const ShowCart = () => {
      return(
        <> 
            {state.map((product) => {
                return (
                    <div>
                      <div className="btn btn-outline-dark rounded mt-2 mx-auto w-75">
                          <div className = "text-center" >
                              <img src={product.image} alt={product.title} height="200px" width="180px"/>
                          </div>
                          <div className="text-center">
                              <h3>{product.title.substring(0,20)}</h3>
                              <p className= "lead fw-bold "> {product.qty } X ${product.price} = $ { product.qty * product.price}
                              </p>
                              <button className="btn btn-secondary me-4 mt-3" onClick={()=>delProduct(product)}>-</button>
                              <button className="btn btn-secondary mt-3" onClick={()=>addProduct(product)}>+</button>
                          </div>
                      </div>
                    </div>
                )
            })}
        </>
      )
    }
    return (
        <div className='container m-5 text-center'> 
            <ShowCart/>
        </div>
    )
}