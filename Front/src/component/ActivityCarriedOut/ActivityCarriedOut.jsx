import './ActivityCarriedOut.css'

import useData from '../../hooks/useData';

//React
import React from 'react';

import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from 'recharts';



function ActivityCarriedOut() {
  const {userPerformanceData} = useData()

// Fonction pour récupérer le type "kind" dans un tableau en français
const getKindArray = () => {
  const displayToFrench = {
    "1": "Cardio",
    "2": "Energie",
    "3": "Endurance",
    "4": "Force",
    "5": "Vitesse",
    "6": "Intensité"
  };
  // retourne kind selon son numéro et en français
  return Object.keys(userPerformanceData.kind).map(englishKey => displayToFrench[englishKey]);
}

 
  return (
  
      <RadarChart width={258} height={250}
      className='RadarChart'
        cx="50%"
        cy="50%"
        outerRadius="70%"
        data={userPerformanceData.data} 
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey="kind"
          style={{ color: "#000000", fontSize: "11" }}
          tick={{ fill: "#ffffff", fontSize: 20 }}
          tickFormatter={(value, index) => getKindArray()[getKindArray().length - index - 1]} // inverser l'autre et décallé d'un cran 
        />

        <Radar
          dataKey="value"
          stroke="red"
          fill="red"
          fillOpacity={0.6}
        />
      </RadarChart>

  )
}
export default ActivityCarriedOut