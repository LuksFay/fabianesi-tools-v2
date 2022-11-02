import "./App.css";
import Categories from "./components/Categories";
import Header from "./components/Header";
import Seller from "./components/Seller";
import Gallery from "./components/Gallery";
function App() {
  return (
    <>
      <Header />
      <Categories />
      <Seller/>
      <Gallery/>
    </>
  );
}

export default App;
