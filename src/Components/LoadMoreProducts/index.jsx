import { useEffect, useState } from "react";
import "./style.css";

const Index = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://dummyjson.com/products?limit=10&skip=${
          count === 0 ? 0 : count * 10
        }`
      );
      if (response.status === 200) {
        setLoading(false);
        const responseData = await response.json();

        setProducts((prev) => [...prev, ...responseData.products]);
      }
    } catch (error) {
      console.error("Error:", error);
      setError(
        error?.message || "Something went wrong while fetching the products."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [count]);

  if (error)
    return (
      <div className="error">
        <h1>{error}</h1>
      </div>
    );
  return (
    <div className="main">
      {loading ? (
        <div className="loading">
          <h1>Loading your products...</h1>
        </div>
      ) : products.length > 0 ? (
        <div className="products-container">
          <div className="products">
            {products?.map((product) => (
              <div key={product.id} className="product">
                <div className="product-image">
                  <img src={product.thumbnail} alt={product.title} />
                </div>

                <h3 id="price">{product?.price} $ </h3>

                <div className="product-details">
                  <h3>{product.title}</h3>
                  <h3>{product?.category?.toUpperCase()}</h3>
                </div>
              </div>
            ))}
          </div>
          <div>
            <button onClick={() => setCount(count + 1)}>
              Load more products...
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Index;
