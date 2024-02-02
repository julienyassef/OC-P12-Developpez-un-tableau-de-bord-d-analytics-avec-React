import './SessionDurationChart.css'

//React
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//Recharts
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line  } from 'recharts';

// Data
import { getUserAverageSessionData } from '../../utils/apiService/apiService';
import { getUserAverageSessionDataMock  } from '../../utils/mockApi/mockApi';

// Fonction pour obtenir la première lettre du jour de la semaine
const getDayOfWeekInitial = (dayNumber) => {
    const daysOfWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    return daysOfWeek[dayNumber - 1];
  };

function SessionDurationChart({userId}) {
    const { id } = useParams();
    const [userData, setUserData] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getUserAverageSessionData(id);
                // const data = await getUserAverageSessionDataMock (id);
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
    <LineChart width={258} height={263} data={userData.data.sessions}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid className="toto" strokeDasharray="3 3" vertical={false}  horizontal={false}/>
        <XAxis dataKey="day" tickFormatter={(dayNumber) => getDayOfWeekInitial(dayNumber)} />
        <YAxis dataKey="sessionLength" /> 
        <Tooltip />
        <Text >Durée moyenne des sessions</Text>
        <Legend />
        <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" /> 
    </LineChart>
    );
}
export default SessionDurationChart

