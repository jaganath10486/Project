import React from "react";
import styles from '../Styles/tab.module.css'

function Tab(props)
{
    return(
        <div className="Tab">
            <div className={styles.line}>
            </div>
            <div className={styles.content}>
                {props.contnet}
            </div>
        </div>
    );
}

return React.memo(Tab)