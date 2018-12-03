import React from 'react'

const Signers = ({ signers }) => ( 
  <div className="container">
      <ul>
        {signers.map(({ node }, index) => (
          <li>{node.name}</li>
        ))}
      </ul>
  </div>
)

export default Signers
