import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './Styles/reset.css'
import React, {useEffect, useState} from 'react';
import Sidebar from './Components/sidebar';
import Navbar from './Components/navbar';
import styles from './Styles/app.module.css';
import Summary from './Components/summary';
import Tasks from './Components/Tasks';

//Context Api's
import {Appprovider} from './Context/ContextApi';

//axios
import axios from 'axios'

function App() {

  const dt = React.useRef(null);
  const [todos, setTodos] = useState([]);
  const [ongoing, setOngoing] = useState(0);
  const [Total, setTotal] = useState(0);
  const [delayed, setDelayed] = useState(0);
  const [Completed, setCompleted] = useState(0);

  //Operations on data
  const operateData = () => {
    const temp = [];
    dt.current.map(lst => {
      temp.push({
        task : lst.title,
        time :  new Date(lst.due_on).toLocaleTimeString('en-US'),
        date : new Date(lst.due_on).toLocaleDateString('en-US'),
        Assigned_By : 'Manohar Patnaik',
        Assigned_To : 'Aravind',
        Deadline : new Date(lst.due_on).toLocaleDateString('en-US'),
        status : lst.status ? lst.status : 'ongoing',
        Priority : 'High'
      })
    });
    setTodos(temp);
    console.log(dt.current);
  }

  //Function to find the ongoing, delayed etc.
  const FilterData = () => {
    let diff = 0;
    setDelayed(0);
    setOngoing(0);
    setTotal(0);
    setCompleted(0);
    for(var i=0; i < dt.current.length; i++)
    {
       diff = parseInt((new Date() - new Date(dt.current[0].due_on))/1000);
       if(dt.current[i].status == 'completed')
       {
        setCompleted((previous) => previous + 1);
       }
       else if(dt.current[i].status == 'pending')
       {
        setDelayed((previous) => previous + 1);
       }
       else
       {
        setOngoing((previous) => previous + 1)
       }
       setTotal((previous) => previous + 1);
    }
    console.log(Completed);
  }

  //Load actual data
  const LoadTasks = () => {
    axios.get('https://gorest.co.in/public/v2/todos')
    .then((Response) => {
      dt.current=Response.data;
      operateData();
      FilterData();
    })
    .catch((error) => {
      console.log(error);
    })
  }

  //When Page is loaded
  useEffect(() => {
    LoadTasks();
  }, [])

  return (
    <div className="App">
      <div className={styles.total_nav}>
        <div className={styles.top}>
        <Appprovider value={{data : todos, ongoing, Total, delayed, Completed}}>
          <Navbar/>
          <Summary/>
          <Tasks/>
        </Appprovider>
        </div>
        <div className={styles.side}>
           <Sidebar/>
        </div>
      </div>
     
    </div>
  );
}

export default App;
