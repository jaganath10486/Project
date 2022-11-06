import React from 'react';

function Box(props) 
{
  return (
    <React.Fragment>
        <div className={`alert alert-${props.className} `}>
            <div className='displayMoney d-flex flex-column align-items-center '>
              <p className='text'>{props.number}</p>
              <p className='text'>{props.text}</p>
            </div>
        </div>
    </React.Fragment>
  )
}

export default React.memo(Box)