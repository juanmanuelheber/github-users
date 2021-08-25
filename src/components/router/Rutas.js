import React from 'react'
import { Route, Switch } from "react-router-dom"
import { Home } from '../views/Home'
import { UserDetail } from '../views/UserDetail'

export const Rutas = () => {
    return (
        <Switch>
            <Route path="/usuario/:login" component={UserDetail}/>
            <Route path="/" component={Home}/>
        </Switch>
    )
}
