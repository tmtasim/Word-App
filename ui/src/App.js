import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import MainLayout from "./containers/Layout/MainLayout";

class App extends Component {
  render() {
    return (
        <Fragment>   
            <MainLayout/>
        </Fragment>
    )
  }
}

const mapDispatchToProps = {}

export default connect(null, mapDispatchToProps)(App)
