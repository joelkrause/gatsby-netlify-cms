import React from 'react'
import { Link } from 'gatsby'

const Footer = class extends React.Component {
 
 render() {
   return (
  
  <footer className="site__footer">
    <div className="wrapper">
    <div className="copyright">
        &copy; Copyright J.
        </div>
        <div className="social__links">
        <ul>
            <li><a href="https://twitter.com/joel_krause" target="_blank">Twitter</a></li>
            <li><a href="https://twitter.com/joel_krause" target="_blank">LinkedIn</a></li>
            <li><a href="https://twitter.com/joel_krause" target="_blank">GitHub</a></li>
        </ul>
        </div>
    </div>
  </footer>
  )}
}

export default Footer