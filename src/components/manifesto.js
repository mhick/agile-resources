import React from 'react'
import { Link } from 'gatsby'

const Manifesto = ({ values }) => (
  <div className="container">
    <h1 className="title">Manifesto for Agile Software Development</h1>
    <h2 className="subtitle">
      Reprinted from <a href="https://agilemanifesto.org">AgileManifesto.org</a>
      .
    </h2>
    <div className="box is-size-5">
      <p>
        We are uncovering better ways of developing software by doing it and
        helping others do it.
      </p>
      <p>Through this work we have come to value:</p>
      <div className="section">
        {values.map(({ node }, index) => (
          <div className="level" key={node.id}>
            <div className="level-left">
              <strong>{node.greaterValue}</strong> over {node.lesserValue}
            </div>
            <div className="level-right is-size-6">
              <Link to={"values/" + node.value}>Resources</Link>
            </div>
          </div>
        ))}
      </div>
      <p>
        That is, while there is value in the items on the right, we value the
        items on the left more.
      </p>
    </div>
  </div>
)

export default Manifesto
