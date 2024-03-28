import "./App.css";
import Accordian from "./component/accordian";
import ImageSlider from "./component/images-slider";
import RandomColor from "./component/random-color";
import StarRating from "./component/star-rating";

function App() {
  return (
    <div className="App">
      {/* Accordian Component */}
      {/* <Accordian /> */}
      {/* Random Color Component */}
      {/* <RandomColor /> */}
      {/* Star Rating Component */}
      {/* <StarRating/> */}
      {/* Images Slider Component */}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
    </div>
  );
}

export default App;
