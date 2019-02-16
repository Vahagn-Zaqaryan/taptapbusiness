import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/style.min.css';
import '../css/tss.min.css';
import '../css/start.min.css';

class App extends Component {
    render() {
        return (
            <main>
                <div className="d--flex justify-center align-center box">
                    <div className="o">
                        <div className="b1">
                            Gamify Your Cultural Tour <span>Destination!</  span>
                        </div>
                        <div className="b2">
                            For Upsale, Memorability, PR
                        </div>
                        <div className="b3">
                            <Link to="./demo">
                                <div className="button_p">
                                    Start with TapTap
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default App;
