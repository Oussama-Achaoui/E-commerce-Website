import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";

function Cards(props){
    const [productsData, setProductsData] = useState([])

    useEffect(()=>{
            fetch('https://fakestoreapi.com/products')
                .then(response => response.json())
                .then(data => setProductsData(data))
                .catch(err => {
                console.log("There must have been an error somewhere in your code", err.message)
                })
            },[])
    const Pro = () => {
        return (
            <>
                {productsData.map((product)=>{
                return(
                    <>
                        <div className="col-md-3">
                            <div class="card h-100 text-center p-4" style={{width: "18rem"}} key={product.id}>
                                <img src={product.image} class="card-img-top" height="250px" alt={product.title}/>
                                <div class="card-body">
                                    <h5 class="card-title">{ product.title.substring(0,12)}</h5>
                                    <p class="card-text lead fw-bold">${product.price}</p>
                                    <NavLink to={`/Products/${product.id}`} class="text-dark"><button class="btn btn-outline-dark">Buy Now</button></NavLink>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
            </>
        )
    }

    return(
        <div className="container my-5 py-5">
            <div className="row justify-content-center">
                <Pro/>
            </div>
        </div>
    )
}

export default Cards