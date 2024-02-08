import './DailyScore.css';

// React
import React from 'react';

// Rechart
import { PieChart, Pie, Cell, Text, Label } from 'recharts';

// Data
import useData from '../../hooks/useData';

function DailyScore() {
  const { userData } = useData();
  const { score, todayScore } = userData;

  // Choisissez le score à utiliser, en priorisant todayScore s'il est défini
  const selectedScore = todayScore !== undefined ? todayScore : score;

  // Convertir le score en pourcentage
  const scorePercentage = Math.round(selectedScore * 100);

  // divisé les % en donnée
  const data = [
    { name: 'Reste', value: 360 - scorePercentage },
    { name: 'Score', value: scorePercentage }
  ];

  // Couleurs pour le graphique % journée score
  const colors = [ 'none', '#FF0000'];

  return (
    <div className="daily-score">
      <h3 className='h3-dayly-score'>Score</h3>
      <div className="container-pourcentage">
        <p className='text-pourcentage-title' >{`${scorePercentage}%`} 
          <span className='text-pourcentage-content'> de votre </span>
          <span className='text-pourcentage-content'> objectif</span>
        </p>
      </div>
      <div className="container-chart ">
        <PieChart  className= 'toto'
        width={250} height={250}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx={120}
            cy={120}
            innerRadius={60}
            outerRadius={80}
            cornerRadius={10}
            startAngle={-180}
            
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius="0%"
            outerRadius="50%"  
            fill="#ffffff"  
          />
        </PieChart>
      </div>
    </div>
  );
}

export default DailyScore;
