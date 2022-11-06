import React from "react";
import styles from '../Styles/Tabs.module.css';

function Tabs({state, text})
{
    console.log(state)
    return(
        <div className={`${styles.tab} ${state === 1 ? styles.active : styles.normal}`}>
            <i class="fa fa-bars" aria-hidden="true"></i>
            <span>{text}</span>
        </div>
    );
}

export default React.memo(Tabs);