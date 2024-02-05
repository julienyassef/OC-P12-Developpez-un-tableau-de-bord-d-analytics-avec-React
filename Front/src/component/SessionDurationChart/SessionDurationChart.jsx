import './SessionDurationChart.css'

//React
import React from 'react';


//Recharts
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line  } from 'recharts';

//Data
import useData from '../../hooks/useData';

// Fonction pour obtenir la première lettre du jour de la semaine
const getDayOfWeekInitial = (dayNumber) => {
    const daysOfWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    return daysOfWeek[dayNumber - 1];
  };

function SessionDurationChart() {
    const {userAverageSessionData} = useData()  


    return (
    <LineChart width={258} height={263} data={userAverageSessionData.sessions}
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

