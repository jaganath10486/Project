import React from "react";
// import Dot from './Dot';

function List(props)
{
    const colors = ['bg-secondary', 'bg-success', 'bg-primary'];
    return(
        <React.Fragment>
            <tr>
                <td>{props.list.task}</td>
                <td>{props.list.time}</td>
                <td>{props.list.date}</td>
                <td>{props.list.Assigned_By}</td>
                <td>{props.list.Assigned_To}</td>
                <td>{props.list.Deadline}</td>
                <td>{props.list.status}</td>
                <td>{props.list.Priority}</td>
            </tr>
        </React.Fragment>
    );
}

export default List;