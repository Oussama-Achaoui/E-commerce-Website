import React from "react";
import Products from "./Products"

export default function Home() {
    return (
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner mt-4">
                <div class="carousel-item active">
                <img class="d-block w-100" height="450px" src="https://img.freepik.com/premium-psd/headphone-brand-product-sale-facebook-cover-web-banner-template_161398-321.jpg?w=2000" alt="First slide"/>
                </div>
            </div>
            <Products/>
        </div>
    )
}