import "./App.css";
import racesData from "./components/races.json";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  const countries = [
    { name: "USA", logoSrc: "/path/to/usa-logo.png" },
    { name: "Canada", logoSrc: "/path/to/canada-logo.png" },
    { name: "UK", logoSrc: "/path/to/uk-logo.png" },
    { name: "Australia", logoSrc: "/path/to/australia-logo.png" },
  ];
  return (
    <div className="app">
      <Navbar
        logoSrc="/path/to/logo.png"
        navImages={[
          "/path/to/nav1.png",
          "/path/to/nav2.png",
          "/path/to/nav3.png",
          "/path/to/nav4.png",
        ]}
        rightImage="/path/to/rightImage.png"
      />
      <Sidebar
        countries={countries}
        dayIcon="/path/to/day-icon.svg"
        weekIcon="/path/to/week-icon.svg"
        monthIcon="/path/to/month-icon.svg"
      />
    </div>
  );
}

export default App;
