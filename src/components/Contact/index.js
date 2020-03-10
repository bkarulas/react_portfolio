import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';

class Contact extends Component {
    render () {
        return (
            <div style={styles.body}>
                <h2>Please feel free to contact me</h2>
                <h1 style={styles.room}>Boris Brad Karulas</h1>
                <Row style={styles.room}>
                    <Col md={{ span: 2, offset: 2 }}>
                        <i style={styles.icon} class="fas fa-envelope"></i>
                    </Col>
                    <h2 style={styles.info}>bkarulas@outlook.com</h2>
                </Row>
                <Row style={styles.foot}>
                    <Col md={{ span: 2, offset: 2 }}>
                        <i style={styles.icon} class="fas fa-phone"></i>
                    </Col>
                    <h2 style={styles.info}>(416)887-3545</h2>
                </Row>
            </div>
        )
    }
}


const styles = {
    body: {
        width:'70%', 
        margin:'auto', 
        marginTop:'8rem'
    },
    icon:{
        fontSize: '4rem'
    },
    info:{
        textAlign: 'left'
    },
    room:{
        marginTop: '5rem'
    },
    foot:{
        marginTop: '5rem',
        marginBottom: '8rem'
    }
}
export default Contact;