import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Footer, Navbar } from '../../components'
import Blog from '../Blog/Blog'
import Contact from '../Contact/Contact'
import Home from '../Home/Home'



const Main = () => {
  return (
    <div>
        {/* NAVBAR */}
        <Navbar/>

        {/* CONTENT */}
        <Router>
        <Switch>
            <Route path="/blog"><Blog/></Route>
            <Route path="/contact"><Contact/></Route>
            <Route path="/"><Home/></Route>
        </Switch>
        </Router>


        {/* FOOTER */}
        <Footer/>
    </div>
  )
}

export default Main