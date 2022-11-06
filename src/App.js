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
        status : 'ongoing',
        Priority : 'High'
      })
    });
    setTodos(temp);
  }

  //Load actual data
  const LoadTasks = () => {
    axios.get('https://gorest.co.in/public/v2/todos')
    .then((Response) => {
      dt.current=Response.data;
      operateData();
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
        <Appprovider value={{todos : todos}}>
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
