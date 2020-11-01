import React from 'react'
import Link from '../Link/Link'
import './Table.scss'

export default function Table({ stack = [], link, github }) {
  return (
    <table>
      <thead>
        <tr>
          <th>stack</th>
          <th>code</th>
          <th>{link && 'live'}</th>
        </tr>
      </thead>
      <tbody>
        {stack.map((elm, index) => (
          <tr key={index}>
            <td>{elm}</td>
            <td>
              {github && index === 0 ? (
                <Link url={github}>repository</Link>
              ) : null}
            </td>
            <td>
              {link && index === 0 ? <Link url={link}>live site</Link> : null}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
