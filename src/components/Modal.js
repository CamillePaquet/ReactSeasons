import React, { useState } from "react";
import "./Modal.css";
import { formatDistanceToNowStrict, formatDistanceStrict } from "date-fns";

const seasons = [
  { id: "Hiver", fin: "19/3/2022", debut: "21/12/2021" },
  { id: "Printemps", fin: "20/6/2022", debut: "20/3/2022" },
  { id: "Ete", fin: "22/11/2022", debut: "21/6/2022" },
  { id: "Automne", fin: "20/12/2022", debut: "23/9/2022" },
];

function Modal(props) {
  const today = props.today;
  const [isVisible, setIsVisible] = useState(false);

  function calcNextSeason() {
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

  let seasonNext = calcNextSeason();

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

  function setVisibility() {
    setIsVisible(!isVisible);
  }

  if (isVisible)
    return (
      <div className="Modal-container">
        <h1 className="Modal-titre">{`${seasonNext.id}`}</h1>
        <p className="Modal-duree">{`${duree}`} jours</p>
        <p className="Modal-restant"> dans {`${joursRestants}`} jours</p>
        <button className="Button-modal" onClick={setVisibility}>
          Ok, je vais être patient !
        </button>
      </div>
    );

  return (
    <button className="Button-modal" onClick={setVisibility}>
      Et après ?
    </button>
  );
}

export default Modal;
