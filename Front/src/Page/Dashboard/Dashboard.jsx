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
      <div className="container-id">
        <h1 className="title-name">
          Bonjour <span className="txt-firstName">{firstName}</span>
        </h1>
        <p className="txt-congratulation">Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
      <div className="container-data">
        <div className="container-chart">
          <DailyDataChart/>
          <div className="container-stats-chart">
            <SessionDurationChart />
            <ActivityCarriedOut />
            <DailyScore />
          </div>
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
