import iconCalories from '../../assets/iconCalories.svg';
import iconProteines from '../../assets/iconProteines.svg';
import iconGlucide from '../../assets/iconGlucide.svg';
import iconLipides from '../../assets/iconLipides.svg';

import './KeyData.css'

function KeyData({ type, value }) {
  let icon, dataLabel, nameLabel, unit;

  switch (type) {
    case 'calorie':
      icon = iconCalories;
      dataLabel = 'Calories';
      nameLabel = 'Calories';
      unit ='kCal'
      break;
    case 'protein':
      icon = iconProteines;
      dataLabel = 'Proteins';
      nameLabel = 'Proteines';
      unit ='g'
      break;
    case 'carbohydrate':
      icon = iconGlucide;
      dataLabel = 'Carbohydrates';
      nameLabel = 'Glucides';
      unit ='g'
      break;
    case 'lipid':
      icon = iconLipides;
      dataLabel = 'Lipids';
      nameLabel = 'Lipides';
      unit ='g'
      break;
  }

  return (
    <div className="container-keyData">
      <img src={icon} alt={type} className="icon-keyData" />
      <div className="content-keyData">
        <p className="data-keyData">{value}{unit}</p>
        <p className="name-keyData">{nameLabel}</p>
      </div>
    </div>
  );
}

export default KeyData;
