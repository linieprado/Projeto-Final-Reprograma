import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from '../pages/Home'
import Kids from '../pages/Kids'
import Livros from '../pages/Livros'
import Autora from '../pages/Autora'

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/Kids' component={Kids}/>
                <Route path='/Livros' component={Livros} />
                <Route path='/Autora' component={Autora} />
                
                
            </Switch>
        </BrowserRouter>
    )
}

export default Routes