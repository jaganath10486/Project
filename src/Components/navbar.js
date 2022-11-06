import React from "react";
import styles from '../Styles/navbar.module.css'

function Navbar()
{
    return(
        <div className={styles.navbar}>
            <div className={styles.nav}>
                <div className={styles.left}>
                    <div className={styles.left_content}>
                     <span className={styles.myapps}>My Apps   </span>
                     <span className={styles.arrow}><i class="fa fa-chevron-right" aria-hidden="true"></i></span>
                     <span className={styles.todos}> Todos</span>
                   </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.right_content}>
                        <div className={styles.icon}>
                         <span className={styles.dot}>
                          <i class="fa fa-bell-o" aria-hidden="true"></i>
                          </span>
                        </div>
                        <div className={styles.icon}> 
                          <span className={styles.dot}>
                            <i class="fa fa-user-o" aria-hidden="true"></i>
                          </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default React.memo(Navbar)