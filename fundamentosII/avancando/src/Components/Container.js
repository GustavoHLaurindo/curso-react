import React, { Children } from 'react'

const container = ({ children }) => {
  return (
    <div>
        <h2>Este é o titulo do container</h2>
        {children}
    </div>
  )
}

export default container        