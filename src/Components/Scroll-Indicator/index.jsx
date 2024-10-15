import { useEffect, useState } from "react";
import "./style.css";
const Index = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const fetchData = async (url) => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setData(data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrolledTillNow = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setScrollProgress((scrolledTillNow / height) * 100);
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, [scrollProgress]);

  console.log(scrollProgress);
  return (
    <div className="main">
      {loading && <div>Loading...</div>}
      <div className="top-container">
        <div className="scroll-progress-container">
          <div
            className="current-progress"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>
      </div>
      {data.length > 0 && (
        <div>
          {data.map((product) => (
            <div key={product.id}>
              <p>{product.title}</p>
            </div>
          ))}
        </div>
      )}
      {data.length === 0 && !loading && <div>No products found.</div>}
    </div>
  );
};

export default Index;
