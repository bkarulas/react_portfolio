import React, { Component } from 'react';
import { Row } from 'react-bootstrap';

class Footer extends Component {
    render() {
        return(
            <Row style={styles.footer}>
                <p style={styles.text}> Boris Brad Karulas &copy;</p>
            </Row>
        )
    }

}

const styles = {
    
    footer:{
        backgroundColor: '#343a40',
        color: '#ffffff',
        marginTop: '3rem',
        padding: '1rem'
    },
    text: {
        margin: 'auto',
        fontSize: '1.25rem'
    }
}

export default Footer;