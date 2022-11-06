import React, { useContext } from 'react'
import Box from './box'
import styles from '../Styles/summary.module.css';
import AddTask from './AddTask';

import { AppContext } from '../Context/ContextApi';


function Summary(props) {
  const {ongoing, Total, delayed, Completed} = useContext(AppContext);
  const hrstyle = {
    width: '100%'
  };

  return (
    <div className={styles.whole}>
      <div className={styles.summary}>
        <div className={styles.summary_top}>
          <div className={styles.summary_tasks}>
            Tasks
          </div>
          <div className={styles.date}>
            <i class="fa fa-chevron-left" aria-hidden="true"></i>
            <i class="fa fa-calendar" aria-hidden="true"></i>
            <span className={styles.currdate}>Nov 6, 2022</span>
            <i class="fa fa-chevron-right" aria-hidden="true"></i>
          </div>
        </div>
        <hr style={hrstyle} />
        <div className={`row mt-3 ${styles.summary_down}`}>
          <div className='col-sm'>
            <Box className='warning' number={ongoing} text={'Ongoing'}>
            </Box>
          </div>
          <div className='col-sm'>
            <Box className='danger' number={delayed} text={'Delayed'}>
            </Box>
          </div>
          <div className='col-sm'>
            <Box className='success' number={Completed} text={'Completed'}>
            </Box>
          </div>
          <div className='col-sm'>
            <Box className='info' number={Total} text={'Total Assigned'}>
            </Box>
          </div>
        </div>
      </div>
      <div className={styles.add}>
        <div className={styles.addTask}>
          <AddTask/>
        </div>
        <div className={styles.sort}>

        </div>
      </div>
    </div>
  )
}

export default React.memo(Summary)