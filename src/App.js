import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import Header from './components/header/Header';
import Tasks from './components/tasks/Tasks';

import './App.scss';

library.add(faCheckCircle, faTrashAlt)

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Container>
                    <Tasks />
                </Container>
            </div>
        );
    }
}

export default App;