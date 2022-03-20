import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom/cjs/react-router-dom.min'


import {  Login, Main, Register } from '../../pages'

const Routes = () => {
    return (
        <Router>
        <Switch>
            {/* login */}
            <Route path="/login"><Login/></Route>
            <Route path="/register"><Register/></Route>
            <Route path="/"><Main/></Route>
        </Switch>
        </Router>
    )
}

export default Routes