import './styles/app.scss'
import React, {Component} from 'react';
import {Header} from './components/Layout'
export class App extends Component {

  render() {
    return (
      <div>
        <Header/>

        {this.props.children}
      </div>
    );
  }
}
