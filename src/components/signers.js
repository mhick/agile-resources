import React from 'react'
import { Link } from 'gatsby'

const Signers = ({ signers }) => (
  <div className="container">
    <div className="columns is-multiline">
      {signers.map(({ node }, index) => (
        <div className="column is-one-third">
          <div className="card">
            <div className="card-content">
              <p className="is-size-5 has-text-weight-semibold">{node.name}</p>
              {node.twitter && (
                <p>
                  <a
                    href={'https://twitter.com/' + node.twitter}
                    target="_blank"
                  >
                    @{node.twitter}
                  </a>
                </p>
              )}
              {node.website && (
                <p>
                  <a href={node.website} target="_blank">
                    Website
                  </a>
                </p>
              )}
              {node.amazon && (
                <p>
                  <a href={node.amazon} target="_blank">
                    Amazon Author Page
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default Signers
