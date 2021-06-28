import React from 'react';
import Soljica from '../../atoms/Soljica/Soljica';
import Tanjiric from '../../atoms/Tanjiric/Tanjric';
import styles from './SoljicaNaTanjiricu.module.scss'

const SoljicaNaTanjiricu = () => {
  return(
      <div className={styles.wrapper}>
          <Soljica kafa={['kap', 'kap', 'kap']}/>
          <Tanjiric/>
      </div>
  )
};

export default SoljicaNaTanjiricu;
