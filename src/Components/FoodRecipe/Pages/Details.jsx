import { useParams } from "react-router-dom";
import { useGlobalContext } from "../Context/Index";
import { useEffect } from "react";

const Details = () => {
  const { id } = useParams();

  const { recipeDetails, setRecipeDetails, handleAddToFavorite } =
    useGlobalContext();

  useEffect(() => {
    const getRecipeDetails = async () => {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const result = await response.json();
      setRecipeDetails(result?.data?.recipe);
    };
    getRecipeDetails();
  }, [id]);
  return (
    <div>
      {recipeDetails && (
        <div>
          <div
            style={{
              display: "flex",
              gap: "15px",
              alignItems: "center",
              marginBottom: "20px",
              cursor: "pointer",
            }}
          >
            <h1>{recipeDetails.title}</h1>
          </div>
          <img src={recipeDetails.image_url} alt={recipeDetails.title} />
          <h3>{recipeDetails.cooking_time} minutes</h3>
          <h4>
            Publisher : <strong>{recipeDetails.publisher}</strong>{" "}
          </h4>
          <div>
            <h2>Ingredients</h2>
            {recipeDetails.ingredients.map((ingredient) => (
              <li key={ingredient.description}>
                {ingredient.description.toUpperCase()} - {ingredient.quantity}{" "}
                {ingredient.unit}
              </li>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
