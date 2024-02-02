import './DailyScore.css'

//React
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//Rechart
import { RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';

// Data
import { getUserData } from '../../apiService/apiService';
import { getUserDataMock  } from '../../mockApi/mockApi';

function DailyScore() {

    const { id } = useParams();
    const [userData, setUserData] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getUserData(id);
          // const data = await getUserDataMock(id);
          setUserData(data);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
  
      fetchData();
    }, [id]);
  
  
    if (!userData) {
      return <p>Loading...</p>;
    }
  
    const { score, todayScore } = userData.data;

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
            label={{ fill: '#666', position: 'insideStart' }}
            fill='#FF0000'
            clockWise={true}
            dataKey='uv'
            maxAngle={scorePercentage } 
        />
        <Tooltip />
        </RadialBarChart>

  </div>
  )
}
export default DailyScore