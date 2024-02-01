import './ActivityCarriedOut.css'

//React
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';

// Data
import { getUserPerformanceData } from '../../apiService/apiService';
import { getUserPerformanceDataMock  } from '../../mockApi/mockApi';

function ActivityCarriedOut({userId}) {
    const { id } = useParams();
    const [userData, setUserData] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getUserPerformanceData(id);
                // const data = await getUserPerformanceDataMock (id);
                setUserData(data);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
        };
        fetchData();
    }, [id]);
    
    if (!userData || !userData.data) {
        return <p>Loading...</p>;
      }

  return (
    <RadarChart outerRadius={90} width={730} height={250} data={userData.data.data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="kind" />
      <PolarRadiusAxis angle={30} domain={[0, 150]} />
      <Radar name="Performance" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      <Legend />
    </RadarChart>
  )
}
export default ActivityCarriedOut