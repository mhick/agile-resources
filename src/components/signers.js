import React from 'react'

const Signers = ({ signers }) => (
  <div className="container">
    <div className="columns is-multiline">
      {signers.map(({ node }, index) => (
        <div className="column is-one-third" key={node.id}>
          <div className="card">
            <div className="card-content">
              <p className="is-size-5 has-text-weight-semibold">{node.name}</p>
              {node.twitter && (
                <p>
                  <a
                    href={'https://twitter.com/' + node.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @{node.twitter}
                  </a>
                </p>
              )}
              {node.website && (
                <p>
                  <a href={node.website} target="_blank" rel="noopener noreferrer">
                    Website
                  </a>
                </p>
              )}
              {node.wikipedia && (
                <p>
                  <a href={node.wikipedia} target="_blank" rel="noopener noreferrer">
                    Wikipedia
                  </a>
                </p>
              )}
              {node.amazon && (
                <p>
                  <a href={node.amazon} target="_blank" rel="noopener noreferrer">
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
