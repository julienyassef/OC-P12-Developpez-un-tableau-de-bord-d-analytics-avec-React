import './DailyDataChart.css'

//React
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//Recharts
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';

// Data
import { getUserActivityData } from '../../apiService/apiService';
import { getUserActivityDataMock  } from '../../mockApi/mockApi';

function DailyDataChart({userId}) {
    const { id } = useParams();
    const [userData, setUserData] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getUserActivityData(id);
          // const data = await getUserActivityDataMock(id);
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

    
    return (
      <BarChart width={835} height={320} data={userData.data.sessions}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="kilogram" fill="#282D30" name="Poids (Kg)" />
      <Bar dataKey="calories" fill="#E60000" name="Calories brûlées (KCal)" />
      </BarChart>
  )
}
export default DailyDataChart