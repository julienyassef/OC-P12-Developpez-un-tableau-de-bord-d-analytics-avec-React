import './Dashboard.css'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import KeyData from '../../component/KeyData/KeyData';
import { getUserData } from '../../apiService/apiService';

function Dashboard() {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserData(id);
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

  const { firstName } = userData.data.userInfos;
  const { calorieCount, proteinCount, carbohydrateCount, lipidCount } = userData.data.keyData;

  return (
    <div className="dashboard-container" key={id}>
      <div className="container-id">
        <h1 className="title-name">
          Bonjour <span className="txt-firstName">{firstName}</span>
        </h1>
        <p className="txt-congratulation">Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
      <div className="container-data">
        <div className="container-chart">

        </div>
        <div className="container-keyDatas">
          <KeyData type="calorie" value={calorieCount} />
          <KeyData type="protein" value={proteinCount} />
          <KeyData type="carbohydrate" value={carbohydrateCount} />
          <KeyData type="lipid" value={lipidCount} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
