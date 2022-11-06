import React,{useState} from "react";
import axios from 'axios';

function AddTask()
{
    const [open, setOpen] = useState(false)
    const [task, setTask] = useState('');
    const [due, setDue] = useState('');

    return(
        <div onClick={() => {setOpen(true)}}>
            <div className="text-bg-danger d-flex justify-content-evenly " style={{width : '8rem', paddingTop : '5px', borderRadius : '5px'}}>
              <i className="fa fa-plus" aria-hidden="true" style={{color : 'white'}}></i>
              <span>Add Task</span>
            </div>
            {
                (open) && (<div>

                </div>)
            }
        </div>
    );
}

export default AddTask;