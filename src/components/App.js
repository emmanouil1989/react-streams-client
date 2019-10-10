import React from 'react';
import { Router , Route, Switch } from 'react-router-dom'
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history'

const App = ()=>{
    //react router dom return a route which mach the exact path. So because /streams/new and /stream/:id are the same, react router dom will return both. They are the same because of the wildcard :id. Switch solve that problem by return the first match only.
    return(
        <div className={"ui container"}>
            <Router history={history}>
                <div>
                    <Header/>

                    <Switch>
                        <Route path={"/"} exact component={ StreamList }/>
                        <Route path={"/streams/new"} exact component={ StreamCreate }/>
                        <Route path={"/streams/edit/:id"} exact component={ StreamEdit }/>
                        <Route path={"/stream/delete/:id"} exact component={ StreamDelete }/>
                        <Route path={"/streams/:id"} exact component={ StreamShow }/>
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default App;
