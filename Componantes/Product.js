import { Link } from "react-router-dom";

function Product(props) {
    console.log(props.product, props.showButton);
    return (
        <div className="card">
            <img src={props.product.image} className="card-img-top" alt={props.product.title} />
            <div className="card-body">
                <h5 className="card-title">{props.product.title}</h5>
                <p className="card-text">{props.product.description}</p>
                <p>Price: {props.product.price}$</p>
                {props.showButton && (
                    <Link className="btn btn-primary" to={`/Product/${props.product.id}`}>
                        Details
                    </Link>
                )}
            </div>
        </div>
    );
}

export default Product;
