import './Slider.css';
function Slider() {
    return (
        <>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://www.jdmedia.co.za/images/carousel/Ecommerce-Banner-1920.jpg" className="d-block w-100 height-100 " alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://freshmindideas.com/wp-content/uploads/2021/10/Simple-ways-to-market-your-eCommerce-website._blog_cover-01-1.png" className="d-block w-100 height-100 " alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.solutions4ecommerce.com/wp-content/uploads/2018/01/ECommerce_Illustration_.png" className="d-block w-100 height-100 " alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>

    );
}
export default Slider;