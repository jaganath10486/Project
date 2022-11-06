import React, {useContext, useState} from "react";
import styles from '../Styles/TaskList.module.css';
import List from './List';

function TaskList({ data })
{
    
    return(
        <div className={styles.List}>
            <table>
                <tr>
                   <th style={{width : '15rem'}}>Task</th>
                   <th style={{width : '5rem'}}>Time</th>
                   <th style={{width : '8rem'}}>Date</th>
                   <th style={{width : '11rem'}}>Assigned By</th>
                   <th style={{width : '13rem'}}>Assigned To</th>
                   <th style={{width : '8rem'}}>Deadline</th>
                   <th style={{width : '5rem'}}>Statue</th>
                   <th style={{width : '5rem'}}>Priority</th>
                </tr>
                {
                    data.map(list => <List list = {list}/>)
                }
            </table>
        </div>
    );
}

export default React.memo(TaskList);