import Button from "./Button";

const seasons = [
    {id: "Hiver", fin: "19/3/2022", debut: "21/12/2021"},
    {id: "Printemps", fin: "20/6/2022", debut: "20/3/2022"},
    {id: "Ete", fin: "22/11/2022", debut: "21/6/2022"},
    {id: "Automne", fin: "20/12/2022", debut: "23/9/2022"},
]

function Modal(props){

    const today = props.today;


    function calcNextSeason () {
        var res;
       seasons.map((season,idx)=> {
            var debut = new Date(season.debut.split('/')[2],season.debut.split('/')[1]-1,season.debut.split('/')[0]);
            var fin = new Date(season.fin.split('/')[2],season.fin.split('/')[1]-1,season.fin.split('/')[0]);
            if (today > debut && today < fin) {
                res = seasons[idx+1];
            } 
       })
       return res;
    } 

    let seasonNext = calcNextSeason();
    let joursRestants = Math.ceil((new Date(seasonNext.debut.split('/')[2],seasonNext.debut.split('/')[1]-1,seasonNext.debut.split('/')[0]) - today)/(1000 * 60 * 60 * 24));
    let duree = Math.ceil((new Date(seasonNext.fin.split('/')[2],seasonNext.fin.split('/')[1]-1,seasonNext.fin.split('/')[0]) - new Date(seasonNext.debut.split('/')[2],seasonNext.debut.split('/')[1]-1,seasonNext.debut.split('/')[0]) )/(1000 * 60 * 60 * 24));

    return (
        <>
            <div>
            <h1>{`${seasonNext.id}`}</h1>
            <p>{`${duree}`} jours</p>
            <p> dans {`${joursRestants}`} jours</p>
            <Button showModal={props.showModal} text="Ok"></Button>
            </div>
        </>
    );
}

export default Modal;