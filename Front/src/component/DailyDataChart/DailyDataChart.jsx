import './DailyDataChart.css'

import useData from '../../hooks/useData';

//Recharts
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar, ResponsiveContainer } from 'recharts';

const DailyDataChart = () => {
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

const Dot = ({ color })  => {
    return (
      <div 
      className='dot-legend-barChart'
      style={{
        backgroundColor: color,
      }}/>
    );
  }  
  
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            backgroundColor: "red",
            color: "white",
            padding: 10,
            fontSize: 10,
          }}
        >
          <p>{`${payload[0].value}kg`}</p>
          <p>{`${payload[1].value}kcal`}</p>
        </div>
      );
    }

    return null;
  };
    
    return (
      <ResponsiveContainer className='responsiveContainerChart' width={835} height={320}>
          <div className='header-barChart'>
            <div className='barChartTitle'>Activité quotidienne</div>
            <div className="legend-barChart">
              <Dot margin={0} color={"black"} />
              <div className='textLegend-BarChart'> Poids (kg)</div>
              <Dot color={"red"} />
              <div className='textLegend-BarChart'>Calories brulée (kCal)</div>
            </div>
          </div>
          <BarChart 
            data={userActivityData.sessions}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barGap={10}
            barSize={12}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis 
              className='barChart-XAxis' 
              tickLine={false}
              tickMargin={18} 
              dataKey={(data) => extractDay(data.day)}
            />
            <YAxis
              orientation="right"
              axisLine={false}
              tickLine={false}
              tickMargin={30}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="kilogram" fill="#282D30" radius={[5, 5, 0, 0]}/>
            <Bar dataKey="calories" fill="#E60000"  radius={[5, 5, 0, 0]} />
          </BarChart>
      </ResponsiveContainer>
    );
}
export default DailyDataChart