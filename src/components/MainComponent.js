import React, { useState } from 'react';



export default class MainComponent extends React.Component {
    constructor() {
            super();

            this.state = { user: {} };
    }
            componentDidMount() {
                fetch('http://localhost:3001/api/trilhas')
                    .then(response => response.json())
                    .then(user => this.setState({ user: user }))
            }
            render() {
                const user = this.state.user;

                return <h1> hello, {user.url}! </h1>;
            }

        } 
        



                    
            
        
