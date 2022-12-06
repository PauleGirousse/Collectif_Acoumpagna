import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './settings.scss';
import Layout from '../src/pages/Layout/Layout';
import Home from '../src/pages/Home/Home';
import Employeurs from './pages/Employeurs/Employeurs';
import Partenaires from './pages/Partenaires/Partenaires';
import Membres from './pages/Membres/Membres';
import Error from './pages/Error/Error';

function App() {
      return (
            <Router>
                  <Routes>
                        <Route path="/" element={<Layout />}>
                              <Route index element={<Home />} />
                              <Route
                                    path="/particulier-employeur"
                                    element={<Employeurs />}
                              />
                              <Route
                                    path="/partenaires"
                                    element={<Partenaires />}
                              />
                              <Route path="/membres" element={<Membres />} />
                              <Route path="*" element={<Error />} />
                        </Route>
                  </Routes>
            </Router>
            // <div className="App">
            //       <header className="App-header">
            //             <img src={logo} className="App-logo" alt="logo" />
            //             <p>
            //                   Edit <code>src/App.js</code> and save to reload.
            //             </p>
            //             <a
            //                   className="App-link"
            //                   href="https://reactjs.org"
            //                   target="_blank"
            //                   rel="noopener noreferrer"
            //             >
            //                   Learn React
            //             </a>
            //       </header>
            // </div>
      );
}

export default App;
