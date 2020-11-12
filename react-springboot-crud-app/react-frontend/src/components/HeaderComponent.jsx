import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-extend-md navbar-dark bg-dark">
                        <div>
                            <a href="http://www.google.com" className="navbar-brand">
                                Employee Management App
                            </a>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;