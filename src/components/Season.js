import Button from "./Button.js";
import React from "react";

const seasons = [
  { id: "Hiver", fin: "19/3/2022", debut: "21/12/2021" },
  { id: "Printemps", fin: "20/6/2022", debut: "20/3/2022" },
  { id: "Ete", fin: "22/11/2022", debut: "21/6/2022" },
  { id: "Automne", fin: "20/12/2022", debut: "23/9/2022" },
];

function Season(props) {
  const today = props.today;

  function calcSeason() {
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

  const seasonActual = calcSeason();

  let joursRestants = Math.ceil(
    (today -
      new Date(
        seasonActual.debut.split("/")[2],
        seasonActual.debut.split("/")[1] - 1,
        seasonActual.debut.split("/")[0]
      )) /
      (1000 * 60 * 60 * 24)
  );

  return (
    <div>
      <h1>{`${seasonActual.id}`}</h1>
      <p>Depuis {`${joursRestants}`} jours</p>
      <Button showModal={props.showModal} text="Et après ?"></Button>
    </div>
  );
}

export default Season;
