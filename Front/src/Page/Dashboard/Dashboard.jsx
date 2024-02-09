import './Dashboard.css'

//component
import KeyData from '../../component/KeyData/KeyData';
import DailyDataChart from '../../component/DailyDataChart/DailyDataChart';
import SessionDurationChart from '../../component/SessionDurationChart/SessionDurationChart';
import ActivityCarriedOut from '../../component/ActivityCarriedOut/ActivityCarriedOut';
import DailyScore from '../../component/DailyScore/DailyScore';

import useData from '../../hooks/useData';

function Dashboard() {
  const {userData} = useData();

  if (!userData.userInfos) {
    return <p>Loading...</p>;
  }

  const { firstName } = userData.userInfos;
  const { calorieCount, proteinCount, carbohydrateCount, lipidCount } = userData.keyData;

  return (
    <div className="dashboard-container">
      <div className="dashboard-container-id">
        <h1 className="dashboard-title-name">
          Bonjour <span className="dashboard-txt-firstName">{firstName}</span>
        </h1>
        <p className="dashboard-txt-congratulation">Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
      <div className="dashboard-container-data">
        <div className="dashboard-container-chart">
          <div  className="componentDailyDataChart">
            <DailyDataChart/>
          </div>
          <div className="dashboard-container-stats-chart">
            <SessionDurationChart  />
            <ActivityCarriedOut />
            <DailyScore />
          </div>
        </div>
        <div className="dashboard-container-keyDatas">
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
