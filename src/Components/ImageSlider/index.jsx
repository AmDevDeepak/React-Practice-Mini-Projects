import { useEffect, useState } from "react";
import "./style.css";
//eslint-disable-next-line
const Index = ({ limit = 5, url, page = 1 }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };
  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };
  const fetchImages = async (url) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`${url}?page=${page}&limit=${limit}`);
      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setImages(responseData);
      setLoading(false);
    } catch (error) {
      setError(
        error?.message || "Something went wrong while fetching the images"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  if (error)
    return (
      <div className="main">
        <h1 className="error">{error}</h1>
      </div>
    );
  return (
    <div className="main">
      {loading ? (
        <div>
          <h1 className="loading">Loading....</h1>
        </div>
      ) : (
        <div className="slider">
          {images?.length > 0 ? (
            <div className="images">
              {images.map((image, idx) => (
                <div key={image.id}>
                  <img
                    className={
                      currentSlide === idx
                        ? "current-image"
                        : "current-image hidden"
                    }
                    src={image.download_url}
                    alt={image.description}
                  />
                </div>
              ))}
            </div>
          ) : null}
        </div>
      )}
      {images?.length > 0 && (
        <div className="buttons">
          <button onClick={handlePrev}>{`<`}</button>
          <button onClick={handleNext}>{`>`}</button>
        </div>
      )}
    </div>
  );
};

export default Index;
