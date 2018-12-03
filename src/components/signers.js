import React from 'react'

const Signers = ({ signers }) => (
  <div className="container">
    <div className="columns is-multiline">
      {signers.map(({ node }, index) => (
        <div className="column is-one-third">
          <div className="card">
            <div className="card-content">
              <p className="title is-5">{node.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default Signers
