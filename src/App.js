import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './Styles/reset.css'
import React from 'react';
import Sidebar from './Components/sidebar';
import Navbar from './Components/navbar';
import styles from './Styles/app.module.css';
import Summary from './Components/summary';
import Tasks from './Components/Tasks';

function App() {
  return (
    <div className="App">
      <div className={styles.total_nav}>
        <div className={styles.top}>
          <Navbar/>
          <Summary/>
          <Tasks/>
        </div>
        <div className={styles.side}>
           <Sidebar/>
        </div>
      </div>
     
    </div>
  );
}

export default App;
