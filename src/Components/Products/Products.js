import { useEffect, useState } from "react";
import Slider from "../Slider/Slider";
import ProductItem from "./ProductItem";
import "./Products.scss";
import {API_URL} from '../../const'
import ScrollToTop from "react-scroll-to-top";
import Feature from "../Small/Feature";
import NewProducts from "../NewProducts/NewProducts"
import { Link } from "react-router-dom";
export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  useEffect(() => {
    fetch(
      `${API_URL}/api/Products`
    )
      .then((res) => res.json())
      .then((products) => setProducts(products));
  }, []);
  const handleShow = () => {
    
  };
  return (
    <div className="products">
      <Slider />
      <Feature/>
      <NewProducts/>
      <ScrollToTop smooth />
      <h3>Our Products</h3>
      <div className="product">
        {products.slice(0, 6).map((item) => (
          <ProductItem key={item.id} data={item} />
        ))}
      </div>
      <div className="showmore">
          <Link to="/shop">
          <a className="show" onClick={handleShow} href={void(0)}>
          Show more
        </a>
          </Link>
      </div>
    </div>
  );
}
