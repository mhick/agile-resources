import React from 'react'

const Manifesto = ({ values }) => (
  <div className="container">
    <h1 className="title">Manifesto for Agile Software Development</h1>
    <h2 className="subtitle">
      Reprinted from <a href="https://agilemanifesto.org">AgileManifesto.org</a>
      .
    </h2>
    <div className="content">
      <p>
        We are uncovering better ways of developing software by doing it and
        helping others do it.
      </p>
      <p>Through this work we have come to value:</p>
      <ul>
        {values.map(({ node }, index) => (
          <li>
            <strong>{node.greaterValue}</strong> over {node.lesserValue}
          </li>
        ))}
      </ul>
      <p>
        That is, while there is value in the items on the right, we value the
        items on the left more.
      </p>
    </div>
  </div>
)

export default Manifesto
