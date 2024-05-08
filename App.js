import About from "./Componantes/About";
import Navbar from "./Componantes/Navbar";
import ProductDetails from "./Componantes/ProductDetails";
import Slider from "./Componantes/Slider";
import Productlist from "./Componantes/productlist";
import { Routes, Route } from "react-router";

function App() {
  return (

    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<>
          <Slider />
          <Productlist />
        </>} />
          <Route path="about" element={<About/>} />
          <Route path="product/:productId" element={< ProductDetails/>} />

          
      </Routes>


    </div>
  )

}

export default App;
