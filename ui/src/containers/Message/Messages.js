import React, { Component } from 'react'
import { connect } from 'react-redux';
import { loadAllMessages, addMessage } from '../../actions/messages.actions'
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import * as Yup from "yup";
import { Formik } from "formik";

const MessageSchema = Yup.object().shape({
    message: Yup.string().required('Required')
});

class Messages extends Component {
    state = {
        showModal: false
    }

    componentDidMount() {
        this.reloadAllMessages();
    }

    reloadAllMessages() {
        this.props.loadAllMessages();
    }

    handleClose = () => {
        this.setState({ showModal: false })
    }

    handleShow = () => {
        this.setState({ showModal: true })
    }
    handleOnSubmit = (values, actions) => {
        this.props.addMessage(values).then((response) => {
            if (response.success === true) {
                this.reloadAllMessages();
                this.handleClose();
                actions.resetForm();
            } else {
                let errorMessage = 'Something went wrong';
                if (response && response.error && response.error.message) errorMessage = response.error.message;
            }
        });
    }

    render() {
        return (
            <Container className="p-3">
                <Jumbotron>
                    <h1 className="header">Word App</h1>
                    <div className="row mb-3">
                        <div className="col-md-12">
                            <Button variant="primary" onClick={this.handleShow} className="float-right">
                                Add message
                            </Button>
                        </div>
                    </div>
                   <div className="row">
                        <div className="col-md-12">
                        <Accordion>
                        {this.props.messages.map((item, index) => {
                            return (
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey={index+1}>
                                        {item.content}
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey={index+1}>
                                        <Card.Body>Is palindrome: {String(item.is_palindrome)}</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            );
                        })
                        }
                    </Accordion>
                        </div>
                   </div>
                    
                    <Modal show={this.state.showModal} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add new message</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Formik
                                initialValues={{
                                    message: ''
                                }}
                                validationSchema={MessageSchema}
                                onSubmit={this.handleOnSubmit}
                                render={({ handleChange, handleSubmit, values, errors, touched, setFieldValue }) => (
                                    <form onSubmit={handleSubmit}>
                                        <div className="input-group">
                                            <input
                                                className={"form-control" + (errors.message && touched.message ? ' is-invalid' : '')}
                                                type="text"
                                                id="message"
                                                name="message"
                                                placeholder="Enter Message"
                                                onChange={handleChange}
                                                value={values.message}
                            
                                            />
                                            <div className="input-group-append">
                                                <Button
                                                    className="btn btn-primary"
                                                    type="submit"   
                                                >
                                                Submit
                                                </Button>
                                            </div>

                                        </div>
                                        {errors.message && touched.message &&
                                            <div className="invalid-feedback">{errors.message}</div>
                                        }
                                    </form>
                                )}
                            />
                        </Modal.Body>
                    </Modal>
                </Jumbotron>
            </Container>
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
    loadAllMessages,
    addMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);