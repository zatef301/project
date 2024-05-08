import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Product from "./Product"; // Corrected variable name

function ProductDetails() {
    const api_url = "https://fakestoreapi.com/products";
    const [product, setProduct] = useState([]); // Corrected variable name
    const params = useParams();

    useEffect(() => {
        fetch(`${api_url}/${params.productId}`)
            .then((res) => res.json())
            .then((product) => setProduct(product)); // Corrected variable name
    });

    return <Product product={product}  showButton={false} />;
}

export default ProductDetails;
