import "./App.css";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
function App() {
  const products = [
    {
      id: 1,
      name: "Produto 1",
      description: "Descrição do produto 1",
      price: 100,
    },
    {
      id: 2,
      name: "Produto 2",
      description: "Descrição do produto 2",
      price: 200,
    },
    {
      id: 3,
      name: "Produto 3",
      description: "Descrição do produto 3",
      price: 300,
    },
    {
      id: 4,
      name: "Produto 4",
      description: "Descrição do produto 4",
      price: 400,
    },
  ];
  return (
    <div className="App">
      <Header />
      <div className="container">
        <h2>Produtos</h2>
        <div>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          
        </div>
      </div>
    </div>
  );
}

export default App;
