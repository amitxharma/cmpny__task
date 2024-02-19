import "./App.css";
import MainContent from "./components/Main-Content/MainContent";
import Navbar from "./components/Navbar/Navbar";
import Placeorder from "./components/Placeorder-section/Placeorder";

function App() {
  return (
    <>
      <Navbar />
      <Placeorder />
      <MainContent />
    </>
  );
}

export default App;
