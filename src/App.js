import { useState } from 'react';
import { Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import routerRules from './router';
import "./App.scss";

import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';


function App() {
  const history = createBrowserHistory();

  const [isOpen, setIsOpen] = useState(false);
  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  }
  return (
    <Router history={history}>
      <div className="App">
        <Header isOpen={isOpen} handleOpenMenu={handleOpenMenu} />
        <main>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-2 col-md-3 col-12">
                  <Sidebar isOpen={isOpen} />
              </div>
              <div className="col-lg-10 col-md-9 col-12">
                  <Switch>{routerRules}</Switch>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
