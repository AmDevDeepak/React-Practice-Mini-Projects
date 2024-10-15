import Accordian from "./Components/Accordian";
import RandomColor from "./Components/RandomColor";
import StarRating from "./Components/StarRating";
import ImageSlider from "./Components/ImageSlider";
import LoadMoreProducts from "./Components/LoadMoreProducts";
import QRGenerator from "./Components/QRGenerator";
import Theme from "./Components/Theme";
import Scroll_Indicator from "./Components/Scroll-Indicator";
import GithubProfileFinder from "./Components/GithubProfileFinder";
import SearchAutoComplete from "./Components/SearchAutoComplete";
import TicTacToe from "./Components/TicTacToe";
import UseFetchTest from "./Components/useFetch/test";
import UseClickOutsideTest from "./Components/useOutsideClick/test";
import UseWindowResize from "./Components/useWindowResize/test";
import ScrollToTopAndBottom from "./Components/ScrollToTopAndBottom/index";
import ScrollToParticularSection from "./Components/ScrollToTopAndBottom/ScrollToSection";
import WeatherApp from "./Components/WeatherComponent";

const App = () => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F1F1F1",
      }}
    >
      <Accordian />
      <RandomColor />
      <StarRating numberOfStars={10} />
      <ImageSlider limit={10} url={`https://picsum.photos/v2/list`} />
      <QRGenerator />
      <Theme />
      <GithubProfileFinder />
      <SearchAutoComplete />
      <TicTacToe />
      <Scroll_Indicator url={`https://dummyjson.com/products?limit=100`} /> */
      <LoadMoreProducts />
      <UseFetchTest />
      <UseClickOutsideTest />
      <UseWindowResize />
      <ScrollToTopAndBottom />
      <ScrollToParticularSection />
      <WeatherApp />
      {/*  For Food Receipe App

      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<Details />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </div>

      {/*  For Food Receipe App */}
    </div>
  );
};

export default App;
