import './ActivityCarriedOut.css'

import useData from '../../hooks/useData';

//React
import React from 'react';

import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from 'recharts';



function ActivityCarriedOut() {
  const {userPerformanceData} = useData()

// Fonction pour récupérer le type "kind" dans un tableau
const getKindArray = () => {
  return Object.values(userPerformanceData.kind);
}
 
  return (
    <ResponsiveContainer width={258} height={250}>
      <RadarChart
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
          tickFormatter={(value) => getKindArray()[value - 1]}
        />

        <Radar
          dataKey="value"
          stroke="red"
          fill="red"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  )
}
export default ActivityCarriedOut