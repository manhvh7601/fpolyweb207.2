import "./dashboard.css";
import { useEffect, useState } from "react";
import Routes from "./routes";
import { edit } from "./api/productAPI";

export default function App() {
  const [products, setProducts] = useState([]);
  const API = "http://localhost:4000/products";

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(API);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    getProducts();
  }, []);
  //Delete product
  const onRemoveHandler = async (id) => {
    const response = await fetch(`${API}/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    const newProducts = products.filter((item) => item.id !== id);
    setProducts(newProducts);
  };
  //Add product
  const onAddHandler = async (item) => {
    const response = await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    const data = await response.json();
    setProducts([...products, data]);
  };
  //Edit Product
  const onEditHandler = async (item) => {
    try {
      const { data } = await edit(item);
      const newProducts = products.map((product) =>
        product.id == item.id ? data : product
      );
      setProducts(newProducts);
    } catch (error) {}
  };
  return (
    <Routes
      products={products}
      onRemove={onRemoveHandler}
      onAdd={onAddHandler}
      onEdit={onEditHandler}
    />
  );
}

// APP || MAIN || ADD;
