import "./styles.css";
import Image from "../../assets/product.jpg";

function ProductCard({product}) {
  const {name, description, price} = product;
  return (
    <div className="card">
      <img src={Image} alt="product" />
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{price}</p>

        <button>Comprar</button>
      </div>
      
    </div>
  );
}
export default ProductCard;
