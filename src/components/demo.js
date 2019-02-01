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
                            Tour Demo
                        </div>
                        <div className="bg1">
                            <a href="https://taptapbehero.firebaseapp.com">
                                https://taptapbehero.firebaseapp.com
                            </a>
                        </div>

                        <div className="b3">
                            <Link to="./price">
                                <div className="button_p">
                                    NEXT
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
