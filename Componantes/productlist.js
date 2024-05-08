
import { useEffect, useState } from "react";
import Product from "./Product";

function Productlist() {
    const api_url = "https://fakestoreapi.com/products";
    const [products, setproducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const getProducts = () => {
        fetch(api_url).then((res) => res.json()).then((data) => setproducts(data));
    }
    const getCategories = () => {
        fetch(`${api_url}/categories`)
        .then((res) => res.json())
        .then((data) => setCategories(data));
    }
    const getproductincat = (catname) =>
        {
            console.log(catname);
            fetch('${api_url}/category/${catname}')
            .then(res=>res.json())
            .then(json=>console.log(json))
        }
        useEffect(() => {
        getProducts();
        getCategories();
    }, []);
    return (
        <>
            <h2 className="text-center" >
                <span className="log">WELCOME TO OUR WEBSITE</span>
            </h2>
            <div className="container">
                <div className="cat">
                {
                    categories.map((cat) => {
                        return <button key={cat} onClick={() =>{
                            getproductincat(cat)
                        }} className="btn btn - info"> {cat} </button>
                    })
                } </div>
                <div className="row">
                    {products.map((product) => {
                        return (<div className="col-3" key={product.id}>
                            <Product product={product} showButton={true} />
                        </div>);
                    })
                    }


                </div>
            </div>

        </>
    );
}
export default Productlist;