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
                            Example of a Gamified Tour
                        </div>
                        <div className="bg1">
                            <a href="https://taptapbehero.firebaseapp.com" target="_blank">
                                <span className="link">https://taptapbehero.firebaseapp.com</span><span>*</span>
                            </a>
                        </div>
                        <div className="u9">
                            *Browse on mobile for optimal user experience
                        </div>
                        <Link to="./price">
                            <div className="b3">
                                <div className="button_p">
                                    Next
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </main>
        );
    }
}

export default App;
