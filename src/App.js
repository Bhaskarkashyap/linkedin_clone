import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Feed from './Pages/Feed';
import Jobs from './Pages/Jobs';
import Login from './Pages/Login';
import Messaging from './Pages/Messaging';
import Mynetwork from './Pages/Mynetwork';
import Notification from './Pages/Notification';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/feed" component={Feed} />
                <Route exact path="/mynetwork" component={Mynetwork} />
                <Route exact path="/jobs" component={Jobs} />
                <Route exact path="/messaging" component={Messaging} />
                <Route exact path="/notifications" component={Notification} />
            </Switch>


        </Router>
    )
}

export default App
