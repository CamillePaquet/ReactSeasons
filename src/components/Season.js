import React from "react";
import "./Season.css";
import { formatDistanceToNowStrict } from "date-fns";

import seasons from "../seasons.json";

function Season(props) {
  const today = props.today;

  const seasonActual = calcSeason(today);

  let joursRestants = formatDistanceToNowStrict(
    new Date(
      seasonActual.debut.split("/")[2],
      seasonActual.debut.split("/")[1] - 1,
      seasonActual.debut.split("/")[0]
    ),
    { unit: "day", addSuffix: true }
  ).split(" ")[0];

  return (
    <div className="Season-container">
      <h1 className="Season-title">{`${seasonActual.id}`}</h1>
      <p className="Season-jours-restants">
        {" "}
        {`Depuis ${joursRestants} jours`}
      </p>
    </div>
  );
}

export default Season;

export function calcSeason(today) {
  var res;
  seasons.map((season) => {
    var debut = new Date(
      season.debut.split("/")[2],
      season.debut.split("/")[1] - 1,
      season.debut.split("/")[0]
    );
    var fin = new Date(
      season.fin.split("/")[2],
      season.fin.split("/")[1] - 1,
      season.fin.split("/")[0]
    );
    if (today > debut && today < fin) {
      res = season;
    }
  });
  return res;
}
