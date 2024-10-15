import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context/Index";

const Home = () => {
  const { searchParam, loading, recipes } = useGlobalContext();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "lightgray",
        padding: "20px",
      }}
    >
      {loading && (
        <div>
          <h2>Loading...</h2>
        </div>
      )}
      {recipes && recipes.length > 0 && (
        <>
          <h3>Showing results for {searchParam}</h3>
          <div
            style={{
              display: "flex",

              flexWrap: "wrap",
              alignItems: "center",
              gap: "5px",
            }}
          >
            {recipes.map((recipe) => (
              <Link
                to={`/recipe/${recipe?.id}`}
                style={{
                  backgroundColor: "yellowgreen",
                  boxShadow: "10px",
                  borderRadius: "10px",
                  padding: "10px",
                  margin: "5px",
                  cursor: "pointer",
                  width: "310px",
                  height: "380px",
                  textDecoration: "none",
                  color: "white",
                }}
                key={recipe.id}
              >
                <img
                  style={{ width: "300px", height: "200px" }}
                  src={recipe.image_url}
                  alt={recipe.title}
                />

                <h2
                  style={{
                    lineClamp: "1",
                  }}
                >
                  {recipe.title.split("").splice(0, 30)}...
                </h2>
                <p>
                  Publisher : <strong>{recipe.publisher}</strong>{" "}
                </p>
              </Link>
            ))}
          </div>
        </>
      )}
      {!recipes.length && <h1>Nothing to show. Search something</h1>}
    </div>
  );
};

export default Home;
