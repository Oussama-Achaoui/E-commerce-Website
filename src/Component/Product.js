import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCart } from '../redux/action'
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom'

export default function Product() {
    const {id} = useParams()
    const [product, setProduct] = useState([])
    
    const dispatch = useDispatch()
    const addProduct = (product) => {
        dispatch(addCart(product))
    }

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    },[])

    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-6 mt-3">
                    <img src={product.image} alt={product.title} height="400px" width="400px"/>
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">{product.category}</h4>
                    <h1 className="display-5">{product.title}</h1>
                    <p className="lead fw-bolder">Rating {product.rating && product.rating.rate} ⭐</p>
                    <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>
                    <p className="lead">{product.description}</p>
                    <button className="btn btn-outline-dark px-4 py-2" onClick={() => addProduct(product)}>Add to Cart</button>
                    <NavLink to="/cart"><button className="btn btn-dark ms-2 px-3 py-2">Go to Cart</button></NavLink>
                </div>
            </>
        )
    }

  return (
    <div>
        <div className="container py-4">
            <div className="row py-5">
                <ShowProduct/>
            </div>
        </div>
    </div>
  )
}
