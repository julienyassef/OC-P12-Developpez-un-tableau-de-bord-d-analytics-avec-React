import './ActivityCarriedOut.css'

import useData from '../../hooks/useData';

//React
import React from 'react';

import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';



function ActivityCarriedOut() {
  const {userPerformanceData} = useData()
 

  return (
    <RadarChart outerRadius={90} width={730} height={250} data={userPerformanceData.data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="kind" />
      <PolarRadiusAxis angle={30} domain={[0, 150]} />
      <Radar name="Performance" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      <Legend />
    </RadarChart>
  )
}
export default ActivityCarriedOut