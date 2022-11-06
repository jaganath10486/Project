import React, {useContext, useState} from "react";
import List from './List';

function TaskList({ data })
{
    
    return(
        <div className={'List'}>
            <table>
                <tr>
                   <th style={{width : '15rem'}}>Task</th>
                   <th style={{width : '5rem'}}>Time</th>
                   <th style={{width : '8rem'}}>Date</th>
                   <th style={{width : '11rem'}}>Assigned By</th>
                   <th style={{width : '10rem'}}>Assigned To</th>
                   <th style={{width : '8rem'}}>Deadline</th>
                   <th style={{width : '7rem'}}>Status</th>
                   <th style={{width : '5rem'}}>Priority</th>
                </tr>
                <tbody>
                {
                    data.map(list => <List list = {list}/>)
                }
                </tbody>
                
            </table>
        </div>
    );
}

export default React.memo(TaskList);