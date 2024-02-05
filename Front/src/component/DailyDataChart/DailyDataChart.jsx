import './DailyDataChart.css'

import useData from '../../hooks/useData';

//Recharts
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Text, ResponsiveContainer } from 'recharts';

function DailyDataChart() {
    const {userActivityData} = useData()

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
      <ResponsiveContainer className='test' width={835} height={320}>
        <BarChart width={835} height={320} data={userActivityData.sessions}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis className='barChart-XAxis' dataKey={(data) => extractDay(data.day)} />
          <YAxis orientation="right" />
          <Tooltip />
          <Legend verticalAlign="top" />
          <Text className='barChart-title'verticalAlign="top"> Activité quotidienne </Text>
          <Bar className='barChart-Bar' dataKey="kilogram" fill="#282D30" name="Poids (Kg)" />
          <Bar className='barChart-Bar'  dataKey="calories" fill="#E60000"  name="Calories brûlées (KCal)" />
        </BarChart>
      </ResponsiveContainer>
    );
}
export default DailyDataChart