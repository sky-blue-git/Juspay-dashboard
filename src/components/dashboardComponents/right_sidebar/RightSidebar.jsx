import React from 'react'
import Activities from './Activities';
import Notifications from './Notifications';
import Contacts from './Contacts';

const RightSidebar = () => {
  return (
    <div>
      <Notifications />
      <Activities />
      <Contacts />
    </div>
  )
}

export default RightSidebar;
