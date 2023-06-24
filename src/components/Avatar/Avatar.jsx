import React from 'react';
//  importar img de avatar
import avatar from '../../img/avatar.jpeg';
import './Avatar.css';

const Avatar = ({width, height, border}) => {
  return (
    <div>
        {/* usar imagen de avatar */}
        <img src={avatar} alt="avatar" className='img-circle' style={{width: `${width}`, height: `${height}`, border: `${border}`}}/>
    </div>
  )
}

export default Avatar