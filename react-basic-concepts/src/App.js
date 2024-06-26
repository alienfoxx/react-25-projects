import "./App.css";
import Accordian from "./component/accordian";
import TabTest from "./component/custom-tabs/tabs-test";
import FeatureFlags from "./component/feauture-flag";
import FeatureFlagGlobalState, {
  FeatureFlagContext,
} from "./component/feauture-flag/context";
import GithubProfileFinder from "./component/github-Finder";
import ImageSlider from "./component/images-slider";
import LightDarkMode from "./component/light-darck-mode/idex";
import LoadMoreProducts from "./component/load-more-product";
import ModalTest from "./component/modal-popup/modal-test";
import QRCodeGenerator from "./component/qr-code-genartor";
import RandomColor from "./component/random-color";
import ScrollIndicator from "./component/scroll-indicator";
import SearchAutoComplete from "./component/search-auto-complete";
import StarRating from "./component/star-rating";
import TictacToe from "./component/tic-tac-toe";
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
      {/* <LightDarkMode/> */}
      {/* Scrooll indcator Component */}
      {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/> */}
      {/* Custom Tabs component */}
      {/* <TabTest/> */}
      {/* Modal Popup Component */}
      {/* <ModalTest/> */}
      {/* Github Finder Component */}
      {/* <GithubProfileFinder/> */}

      {/* serach Auto Complete component */}
      {/* <SearchAutoComplete/> */}
      {/* tic-tac-toe Componenent */}
      {/* <TictacToe /> */}
      {/* Feauture Flag Implementation */}
      <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState>
    </div>
  );
}

export default App;
