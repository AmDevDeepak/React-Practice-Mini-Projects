import { useRef } from "react";
import useFetch from "../useFetch/index";
const ScrollToTopAndBottom = () => {
  const { data, loading, error } = useFetch(`https://dummyjson.com/products`);
  const bottomReference = useRef(null);
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  const handleScrollToBottom = () => {
    bottomReference.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div>
      <h1>Scroll To Top and Bottom Feature</h1>
      <button onClick={handleScrollToBottom}>Scroll to bottom</button>
      {loading && <p>Loading! Please Wait...</p>}
      {error && <p>Error!</p>}
      <h3>This is top</h3>
      {data && data.products && data.products.length
        ? data.products.map((product) => (
            <h4
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "5px",
                borderRadius: "8px",
                width: "fit-content",
              }}
              key={product.id}
            >
              {product.title}
            </h4>
          ))
        : null}
      <div ref={bottomReference}></div>
      <h3>This is Bottom</h3>
      <button onClick={handleScrollToTop}>Scroll to Top</button>
    </div>
  );
};

export default ScrollToTopAndBottom;
