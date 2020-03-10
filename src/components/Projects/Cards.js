import React from 'react';
import { Col, Card, Button, Image } from 'react-bootstrap';
import './projects.css'




const cards = (props) => {
    return(
            <Col md="auto" style={styles.area}>
                <Card style={styles.card}>
                <Card.Title style={styles.title}>{props.name}</Card.Title>
                <Image style={styles.image} src={props.img} alt={props.alt} roundedCircle fluid />
                    <Card.Body style={styles.body}>
                        <Card.Text>
                        {props.info}
                        </Card.Text>
                        <div  className='projectbutton'>
                            <a style={styles.button} href={props.gitLink} target="blank" rel="noopener noreferrer">
                                <Button variant="dark">GitHub</Button>
                            </a>
                            <a style={styles.button} href={props.siteLink} target="blank" rel="noopener noreferrer">
                                <Button variant="dark">SiteLink</Button>
                            </a>
                        </div>
                    </ Card.Body>
                </ Card>
            </ Col>
        )
    }

const styles = {
    
    area:{
        margin: 'auto',
    },
    card: {
        width: '23rem',
        margin: '1rem'
    },
    title:{
        textAlign: 'center',
        fontSize: '1.9rem',
        margin: '1.25rem'
    },
    image:{
        height: '21rem', 
        width: '21rem',
        border: '.2rem solid #280170',
        backgroundColor: 'none',
        margin: 'auto',
        marginBottom: '1em'
    },
    body:{
        backgroundColor: '#ffffff',
        border: '.1rem solid #000000',
        marginBottom: '3rem',
    },
    button:{

        margin: '1rem' 
    }
}

export default cards;