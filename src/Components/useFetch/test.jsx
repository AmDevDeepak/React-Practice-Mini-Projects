import useFetch from "./index";
const UseFetchTest = () => {
  const { data, loading, error } = useFetch(`https://dummyjson.com/products`);
  //   console.log(data, loading, error);
  return (
    <div>
      <h1>useFetch Custom Hook Test</h1>
      {loading && <p>Loading! Please Wait...</p>}
      {error && <p>Error!</p>}
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
    </div>
  );
};

export default UseFetchTest;
