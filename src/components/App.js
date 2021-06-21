import WeatherFetch from "../components/WeatherFetch";
import Footer from "./Footer";
import "../css/App.css";

function App() {
  return (
    <div className="App">
      <div className="content">
        <WeatherFetch />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
