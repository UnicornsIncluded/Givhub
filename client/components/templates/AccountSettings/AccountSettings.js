import React from 'react'
import ChangeUsername from '../../organisms/ChangeUsername'
import ChangePassword from '../../organisms/ChangePassword'

export default function Account() {
  return (
    <div className="account-settings">
      <ChangeUsername />
      <ChangePassword />
    </div>
  )
}
