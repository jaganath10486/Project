import React, {useState, useReducer, useContext} from 'react';
import styles from '../Styles/Tasks.module.css';
import Tabs from './Tabs';
import TasksList from './TasksList';

function Task()
{
    const [state1, setState1] = useState(1);
    const [state2, setState2] = useState(0);
    const [search, setSearch] = useState('');
    // console.log(state)
    return(
        <div className={styles.Tasks}>
            <div className={styles.content}>
                <div className={styles.top}>
                    <div className={styles.top_head}>
                       Tasks   
                    </div>
                    <div className={styles.tabs}>
                        <div className={styles.tab} onClick={() => {setState1(1);setState2(0)}}>
                           <Tabs state={state1} text = {'All'} />
                        </div>
                        <div className={styles.tab} onClick={() => {setState1(0); setState2(1)}}>
                          <Tabs state={state2} text = {'My Todos'} />
                        </div>
                    </div>
                </div>
                <div className={styles.middle}>
                 <input class="form-control me-2" type="search" placeholder="Search Todos " aria-label="Search"></input>
                </div>
                <div className={styles.bottom}>
                    <TasksList/>
                </div>
            </div>
        </div>
    );

}

export default React.memo(Task);