import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/style.min.css';
import '../css/tss.min.css';
import '../css/price.min.css';

class App extends Component {
    render() {
        return (
            <main>
                <div className="d--flex justify-center align-center box">
                    <div className="otto">
                        <div className="bbox">
                            <div className="benef">
                                Benefits
                            </div>
                            <div className="go">
                                <div className="g5">
                                    5+ Game elements
                                </div>
                                <div className="s5">
                                    5+ Story elements
                                </div>
                                <div className="u5">
                                    5000+ users/year
                                </div>
                            </div>
                        </div>
                        <Link to="./mail">
                            <div className="b3">
                                <div className="button_p">
                                    Order
                                </div>
                            </div>
                        </Link>
                        <div className="u8">
                            *Yearly subscription based on your average yearly visitor amount.
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default App;
