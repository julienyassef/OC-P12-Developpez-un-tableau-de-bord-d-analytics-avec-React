import './Dashboard.css'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Dashboard() {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/user/${id}`);
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }
        const data = await response.json();
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
    <div className="dashboard-container">
      <div className="container-id">
      <h1 className="title-name">
        Bonjour{" "}
        <span className="txt-firstName">{userData.data.userInfos.firstName}</span>
      </h1>
        <p className="txt-congratulation">Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
    </div>
  );
}

export default Dashboard;
