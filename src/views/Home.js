import React, { useState } from "react";
import ReactTooltip from "react-tooltip";

import MapChart from "../components/MapChart";
import Dashboard from "../components/Dashboard";
import Footer from "../components/Footer";

function Home() {
  const [content, setContent] = useState("");
  const [dashboardDisplayed, setDashboardDisplayed] = useState(false);
  return (
    <div>
      <div className="mapChart-container customMapContainer">
        <MapChart
          handleClick={() => setDashboardDisplayed(true)}
          setTooltipContent={setContent}
        ></MapChart>
        <ReactTooltip place="top" type="dark" effect="float">
          {content}
        </ReactTooltip>
        {dashboardDisplayed ? <Dashboard /> : null}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
