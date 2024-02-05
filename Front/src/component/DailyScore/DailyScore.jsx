import './DailyScore.css'

//React
import React from 'react';

//Rechart
import { RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';

//Data
import useData from '../../hooks/useData';



function DailyScore() {
    const {userData} = useData();

  
    const { score, todayScore } = userData;

    // Choisissez le score à utiliser, en priorisant todayScore s'il est défini
    const selectedScore = todayScore !== undefined ? todayScore : score;
    
    // Convertir le score en pourcentage
    const scorePercentage = Math.round(selectedScore * 100);

  return (
    <div className="daily-score">
    <p>{`${scorePercentage}%`}</p>
    <RadialBarChart
        width={300}
        height={300}
        innerRadius="80%"
        outerRadius="100%"
        data={[{ uv: scorePercentage }]}
        startAngle={0}
        endAngle={360}
        >
        <RadialBar
            minAngle={0}
            label={{ fill: '#FF0000', position: 'insideStart' }}
            fill='gray'
            clockWise={true}
            dataKey='uv'
            maxAngle={scorePercentage} 
        />
        <Tooltip />
        </RadialBarChart>

  </div>
  )
}
export default DailyScore