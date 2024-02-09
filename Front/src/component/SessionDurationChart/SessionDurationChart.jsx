import './SessionDurationChart.css'

//React
import React, { useState } from 'react';

//Recharts
import { LineChart, CartesianGrid, Rectangle, XAxis, YAxis, Tooltip, Legend, Dot, Line, ResponsiveContainer } from 'recharts';

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
  

// Définition du composant CustomTooltip
const CustomTooltip = ({ active, payload, label }) => {
    // Vérification si le tooltip doit être affiché et si le payload contient des données
    if (active && payload && payload.length) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "white",
            color: "black",
            padding: 2,
            fontSize: 12,
          }}
        >
          <p>{`${payload[0].value}min`}</p>
        </div>
      );
    }
    return null;
  };


 // Définition du composant CustomDot
const CustomDot = ({ cx, cy }) => {

    return (
      <Dot
        cx={cx}        // Coordonnée x du centre du cercle
        cy={cy}        // Coordonnée y du centre du cercle
        fill="#fff"    // Couleur de remplissage du cercle (blanc)
        r={4}          // Rayon du cercle
        stroke="#ffffff50"   // Couleur de la bordure du cercle avec une transparence (blanc avec 50% d'opacité)
        strokeWidth={10}     // Épaisseur de la bordure du cercle
      />
    );
  };
  

function SessionDurationChart() {
    const {userAverageSessionData} = useData() 
    const [cursorActive, setCursorActive] = useState(false); 

    return (
        <ResponsiveContainer width={250} height={250}>
            <LineChart 
                className="sessionDuration" 
                data={userAverageSessionData.sessions} 
                margin={{ top: 5, right: 15, left: 15, bottom: 5 }}
              >
                <text x={30} y={30} 
                  opacity="0.504" 
                  fill="#faf9f6" 
                  textAnchor="start" 
                  dominantBaseline="central">
                  <tspan>Durée moyenne des</tspan>
                  <tspan x={30} dy={20}>sessions</tspan>
                </text>
                <XAxis 
                    className='legend-lineChart' 
                    stroke="white" 
                    tickLine={false} 
                    axisLine={false}  
                    dataKey ="day" 
                    tickFormatter={(value) => getDayOfWeekInitial(value)}
                />
                <YAxis 
                    domain={["dataMin - 20", "dataMax + 60"]} 
                    hide 
                />
                <Tooltip
                    content={<CustomTooltip />}
                    cursor={<CustomCursor />}
                />

                <Line
                    type="natural"
                    opacity= "0.504" 
                    dataKey="sessionLength"
                    stroke="#faf9f6"
                    strokeWidth={2} 
                    dot={false}
                    activeDot={<CustomDot data={useData} />}
                />
            </LineChart>
        </ResponsiveContainer>
    );
}
export default SessionDurationChart

