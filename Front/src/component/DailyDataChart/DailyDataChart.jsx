import './DailyDataChart.css'

//React
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//Recharts
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Text, ResponsiveContainer } from 'recharts';

// Data
import { getUserActivityData } from '../../utils/apiService/apiService';
import { getUserActivityDataMock  } from '../../utils/mockApi/mockApi';

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

    //modification de l'affichage des dates sur le graphique
    const extractDay = (dateString) => {
      // Divise la chaîne de date en parties en utilisant le caractère '-'
      const parts = dateString.split('-');
      // Récupère le dernier élément du tableau résultant
      const day = parts[2];
      // Utilise parseInt pour convertir la chaîne en entier
      return parseInt(day, 10);
    };
 
    
    return (
      <ResponsiveContainer width={835} height={320}>
        <BarChart width={835} height={320} data={userData.data.sessions}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis className='barChart-XAxis' dataKey={(data) => extractDay(data.day)} />
          <YAxis orientation="right" />
          <Tooltip />
          <Legend verticalAlign="top" />
          <Text className='barChart-title'verticalAlign="top"> Activité quotidienne </Text>
          <Bar className='barChart-Bar' dataKey="kilogram" fill="#282D30" name="Poids (Kg)" />
          <Bar className='barChart-Bar' dataKey="calories" fill="#E60000" name="Calories brûlées (KCal)" />
        </BarChart>
      </ResponsiveContainer>
    );
}
export default DailyDataChart