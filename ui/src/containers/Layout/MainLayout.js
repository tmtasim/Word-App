import React, {Component} from 'react'
import {connect} from 'react-redux';
import {loadAllMessages} from '../../actions/messages.actions'
import Messages from '../Message/Messages'



class MainLayout extends Component {
    render(){
        return(
            <Messages/>
        );
    }
}

const mapStateToProps = (state) => {
   const messages = state.messages.messages;
    
   return {
      messages
    };
};

const mapDispatchToProps = {
    loadAllMessages
};

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);