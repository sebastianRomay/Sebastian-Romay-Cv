import React from 'react';
//  importar img de avatar
import avatar from '../../img/avatar.jpeg';
import './Avatar.css';

const Avatar = () => {
  return (
    <div>
        {/* usar imagen de avatar */}
        <img src={avatar} alt="avatar" className='img-circle'/>
    </div>
  )
}

export default Avatar