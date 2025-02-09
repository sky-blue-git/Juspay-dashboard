import React from 'react'
import Activities from './Activities';
import Notifications from './Notifications';
import Contacts from './Contacts';

const RightSidebar = () => {
  return (
    <div style={{padding: "20px", borderLeft:"1px solid var(--black10)"}}>
      <Notifications />
      <Activities />
      <Contacts />
    </div>
  )
}

export default RightSidebar;
