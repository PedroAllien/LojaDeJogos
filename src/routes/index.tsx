import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from '../views/Home';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route component={ Home }  path="/" exact />
            </Switch>
        </BrowserRouter>
    )
 }

 

 