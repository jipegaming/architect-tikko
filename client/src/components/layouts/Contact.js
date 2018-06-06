import React, { Component } from 'react';
import { Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel, HelpBlock, Button } from 'react-bootstrap/lib';
import GoogleMapReact from 'google-map-react';

function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Contact extends Component {

    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    render() {
        const gridInstance = (
            <Grid id="contact">
                <Row className="show-grid">
                    <Col>
                        <h2>Contact</h2>
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col md={6}>
                        <h3>Envoyez-moi votre message</h3>
                        <Form>
                            <Row>
                                <Col sm={6}>
                                    <FieldGroup
                                        id="formControlsText"
                                        type="text"
                                        label="Nom:"
                                        placeholder="entrez votre nom..."
                                    />
                                </Col>
                                <Col sm={6}>
                                    <FieldGroup
                                        id="formControlsText"
                                        type="text"
                                        label="Prénom:"
                                        placeholder="entrez votre prénom..."
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={4}>
                                    <FieldGroup
                                        id="formControlsText"
                                        type="text"
                                        label="Téléphone:"
                                        placeholder="entrez votre numéro..."
                                    />
                                </Col>
                                <Col sm={8}>
                                    <FieldGroup
                                        id="formControlsText"
                                        type="text"
                                        label="E-mail:"
                                        placeholder="entrez votre mail..."
                                    />
                                </Col>
                            </Row>
                            <FormGroup controlId="formControlsTextarea">
                                <ControlLabel>Message:</ControlLabel>
                                <FormControl componentClass="textarea" placeholder="écrivez votre message..." />
                            </FormGroup>
                            <Button bsStyle="warning">Envoyer</Button>
                        </Form>
                    </Col>
                    <Col md={6}>
                        <h3>Plan de situation</h3>
                        <div className='google-map' style={{ height: '100vh', width: '100%' }}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: "AIzaSyDgM3E3-6L-xeln5pOHXhnVQsy6e711o5Y" }}
                                defaultCenter={this.props.center}
                                defaultZoom={this.props.zoom}>
                                <AnyReactComponent
                                    lat={59.955413}
                                    lng={30.337844}
                                    text={'Kreyser Avrora'} />
                            </GoogleMapReact>
                        </div>
                    </Col>
                </Row>
            </Grid>
        )
        return (
            gridInstance
        )
    }
}

export default Contact;
