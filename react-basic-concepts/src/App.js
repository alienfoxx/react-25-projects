import "./App.css";
import Accordian from "./component/accordian";
import ImageSlider from "./component/images-slider";
import LightDarkMode from "./component/light-darck-mode/idex";
import LoadMoreProducts from "./component/load-more-product";
import QRCodeGenerator from "./component/qr-code-genartor";
import RandomColor from "./component/random-color";
import StarRating from "./component/star-rating";
import TreeView from "./component/tree-view";
import menus from "./component/tree-view/data";

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
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}
      {/* Load More products Component */}
      {/* <LoadMoreProducts/> */}

      {/* Menu tree view component /menu UI component/recursive navigation menu */}
      {/* <TreeView menus={menus}/> */}
      {/* QR Code Generator Component */}
      {/* <QRCodeGenerator/> */}
      {/* dark light mode theme switcher Component */}
      <LightDarkMode/>
    </div>
  );
}

export default App;
