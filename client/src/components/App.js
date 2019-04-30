import 'materialize-css/dist/css/materialize.min.css'
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Header'
import Dashboard from './Dashboard'
const App = ()=> {
  return (
    <Router>
      <Header />
      <div className="container">
        <Route path="/" component={Dashboard} />
      </div>
    </Router>
  )
}
export default App
