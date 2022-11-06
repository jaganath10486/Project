import React, {useContext} from 'react'
import Box from './box'
import styles from '../Styles/summary.module.css';
// import {AppContext} from './../Context/ContextApi.js'

function Summary(props) 
{
//   const {budget, items} = useContext(AppContext);
//   let spent = items.reduce((total, item) => {return (total + item.itemCost)}, 0);
//   console.log(budget, spent);
  const budget = 0;
  const spent = 0;
  const hrstyle = {
    width : '100%'
  };
  
  return (
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
        <hr style={hrstyle}/>
        <div className= {`row mt-3 ${styles.summary_down}`}>
					<div className='col-sm'>
						<Box className = 'warning' number = {budget} text ={'Ongoing'}>
                        </Box>
					</div>
					<div className='col-sm'>
						<Box className = 'danger' number = {budget} text={'Delayed'}>
                       </Box>
					</div>
					<div className='col-sm'>
						<Box className = 'success' number = {spent} text={'Completed'}>
                        </Box>
					</div>
                    <div className='col-sm'>
						<Box className = 'info' number = {spent} text={'Total Assigned'}>
                        </Box>
					</div>
				</div>
    </div>
  )
}

export default React.memo(Summary)