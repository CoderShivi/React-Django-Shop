import React from "react";

// Let's import the ProductCard we built in components
import ProductCard from "../components/ProductCard";

const Home =() =>{
    // This section will be replaced with logic for fetching the JSON response of products from API
    // and generating an array of products of the same structure 
    const fakeproducts=[
        {id:1, name:"Iphone", Price:100},
        {id:2, name:"s23", Price:20},
        {id:3, name:"Vivo", Price:300}
    ]

    return (
        <div className="container mt-s">
            <h1>
                Products
            </h1>
            <div className="row">
                {fakeproducts.map((product)=>{
                <ProductCard key={product.id} product={product}/>
                })}

            </div>
        </div>
    )

};

export default Home;