import './BarChart.css'

//React
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//Recharts


// Data
import { getUserActivityData } from '../../apiService/apiService';
import { getUserActivityDataMock  } from '../../mockApi/mockApi';

function BarChart({userId}) {
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
    <div className="bar-chart">  

    
       
    </div>
  )
}
export default BarChart