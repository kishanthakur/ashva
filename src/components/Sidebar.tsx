import React, { useState } from "react";
import "./Sidebar.scss";
import racesData from "./races.json"; // Adjust the path as per your file location

interface Country {
  name: string;
  logoSrc: string;
}

interface SidebarProps {
  countries: Country[];
  dayIcon: string;
  weekIcon: string;
  monthIcon: string;
}

const Sidebar: React.FC<SidebarProps> = ({
  countries,
  dayIcon,
  weekIcon,
  monthIcon,
}) => {
  const [selectedDateIcon, setSelectedDateIcon] = useState<number | null>(null);

  return (
    <aside className="sidebar">
      <div className="date-selector">
        <input type="date" className="date-selector__input" />
        {[dayIcon, weekIcon, monthIcon].map((iconSrc, index) => (
          <button
            key={index}
            className={`date-selector__button ${
              selectedDateIcon === index ? "active" : ""
            }`}
            onClick={() => setSelectedDateIcon(index)}
          >
            <img
              src={iconSrc}
              alt={`Icon ${index + 1}`}
              className="date-selector__icon"
            />
          </button>
        ))}
      </div>
      <input type="text" placeholder="Search..." className="sidebar__search" />

      <div className="content-wrapper">
        <ul className="countries-list">
          {countries.map((country, index) => (
            <li key={index} className="country-item">
              <img
                src={country.logoSrc}
                alt="ct"
                className="country-item__logo"
              />
            </li>
          ))}
        </ul>

        <div className="races-list">
          {racesData.map((race) => (
            <div key={race.id} className="race-item">
              <div className="race-header">
                <span className="race-name">{race.name}</span>
                <img
                  src="{race.countryFlag}"
                  alt="flag"
                  className="race-country-flag"
                />{" "}
              </div>
              <div className="race-footer">
                <span className="race-id">{race.id}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
