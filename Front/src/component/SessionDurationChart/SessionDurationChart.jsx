import './SessionDurationChart.css'

//React
import React from 'react';


//Recharts
import { LineChart, CartesianGrid, Rectangle, XAxis, YAxis, Tooltip, Legend, Line  } from 'recharts';

//Data
import useData from '../../hooks/useData';

// Fonction pour obtenir la première lettre du jour de la semaine
const getDayOfWeekInitial = (dayNumber) => {
    const daysOfWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    return daysOfWeek[dayNumber - 1];
  };


// Définition du composant CustomCursor
const CustomCursor = ({ points, width }) => {
    // Extraction de la coordonnée x du premier point dans le tableau de points
    const { x } = points[0];
  
    // Rendu d'un élément Rectangle en tant que curseur
    return <Rectangle fill="#00000010" x={x} width={width} height={260} />;
  };
  


const CustomTooltip = ({ active, payload, label }) => {
if (active && payload && payload.length) {
console.log("Payload:", payload);
return (
    <div
    className="custom-tooltip"
    style={{
        backgroundColor: "white",
        color: "black",
        padding: 2,
        fontSize: 10,
    }}
    >
    <p>{`${payload[0].value}min`}</p>
    </div>
);
}
return null;
};



function SessionDurationChart() {
    const {userAverageSessionData} = useData()  


    return (
        <LineChart className="sessionDuration" width={258} height={263} data={userAverageSessionData.sessions} margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
            <text x={30} y={30} fill="#faf9f6" textAnchor="start" dominantBaseline="central">
                <tspan>Durée moyenne des</tspan>
                <tspan x={30} dy={20}>sessions</tspan>
            </text>
            <XAxis className='toto' stroke="white" tickLine={false} axisLine={false}  dataKey ="day" tickFormatter={(value) => getDayOfWeekInitial(value)}/>
            <YAxis domain={["dataMin", "dataMax + 60"]} hide />
            <Tooltip
            content={<CustomTooltip />}
            cursor={<CustomCursor />}
            style={{ backgroundColor: "black" }}
          />
            <Legend />
            <Line type="monotone" dataKey="sessionLength" stroke="white" /> 
        </LineChart>
    );
}
export default SessionDurationChart

