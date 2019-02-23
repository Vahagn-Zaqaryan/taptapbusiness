import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './css/style.min.css';
import './css/tss.min.css';
import './css/main.min.css';
import Logo from './img/logo.png';
import Start from './components/start';
import Demo from './components/demo';
import Price from './components/price';
import Mail from './components/mail';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="application">
                <nav className="w--full">
                    <div className="nav-box d--flex">
                        <div className="logo-box">
                            <Link to="/">
                                <img src={Logo} alt="Logo" title="Logo"/>
                            </Link>
                        </div>
                        <div className="vRel d--flex align-center">
                            <div className="vBox">

                            </div>
                        </div>
                    </div>
                </nav>
                <Route exact path="/" component={Start}/>
                <Route exact path="/demo" component={Demo}/>
                <Route exact path="/price" component={Price}/>
                <Route exact path="/mail" component={Mail}/>
            </div>
        );
    }
}

export default App;
