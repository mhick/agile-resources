import React from 'react'
import {Link} from 'gatsby'

const Signers = ({ signers }) => (
  <div className="container">
    <div className="columns is-multiline">
      {signers.map(({ node }, index) => (
        <div className="column is-one-third">
          <div className="card">
            <div className="card-content">
              <p className="title is-5">{node.name}</p>
              <p>
              	<Link to="#">Website</Link>
              </p>
              <p>
                <Link to="#">Twitter</Link>
              </p>
              <p>
                <Link to="#">Publications</Link>
              </p>
              <p>
                <Link to="#">Amazon Author Page</Link>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default Signers
