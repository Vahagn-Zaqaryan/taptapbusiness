import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/style.min.css';
import '../css/tss.min.css';
import '../css/demo.min.css';

class App extends Component {
    render() {
        return (
            <main>
                <div className="d--flex justify-center align-center box">
                    <div className="o">
                        <div className="bg1 ultra">
                            Our Email
                        </div>
                        <div className="bg1">
                            <a href="">
                                taptapstartup@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default App;
