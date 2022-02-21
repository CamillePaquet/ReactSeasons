import React from "react";
import "./NextSeason.css";
import { formatDistanceToNowStrict, formatDistanceStrict } from "date-fns";

import seasons from "../seasons.json";

function NextSeason(props) {
  const today = props.today;

  let seasonNext = calcNextSeason(today);

  let joursRestants = formatDistanceToNowStrict(
    new Date(
      seasonNext.debut.split("/")[2],
      seasonNext.debut.split("/")[1] - 1,
      seasonNext.debut.split("/")[0]
    ),
    {
      unit: "day",
      addSuffix: true,
    }
  ).split(" ")[1];

  let duree = formatDistanceStrict(
    new Date(
      seasonNext.debut.split("/")[2],
      seasonNext.debut.split("/")[1] - 1,
      seasonNext.debut.split("/")[0]
    ),
    new Date(
      seasonNext.fin.split("/")[2],
      seasonNext.fin.split("/")[1] - 1,
      seasonNext.fin.split("/")[0]
    ),
    {
      unit: "day",
    }
  ).split(" ")[0];

  return (
    <div className="Modal-container">
      <h1 className="Modal-titre">{`${seasonNext.id}`}</h1>
      <p className="Modal-duree">{`${duree}`} jours</p>
      <p className="Modal-restant"> dans {`${joursRestants}`} jours</p>
    </div>
  );
}

export default NextSeason;

export function calcNextSeason(today) {
  var res;
  seasons.map((season, idx) => {
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
      res = seasons[idx + 1];
    }
  });
  return res;
}
