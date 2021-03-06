import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIconDropdown from './MenuIconDropdown'

const items = [
  { text: 'Profile' },
  { text: 'Settings' },
  { text: 'Log Out' },
]

export default () => {
  
  return (
    <MenuIconDropdown
      icon={AccountCircleIcon}
      items={items}
    />
  )
}