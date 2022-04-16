import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import classes from './Footer.module.css'

function Footer() {
  return (
    <div className={classes.footer}>
        <Container className='p-0'>
            <Row>
                <Col className="text-center py-3">Contact US</Col>
                <Col className="text-center py-3">email : lionsrabatelites@lionsclub.org</Col>
            </Row>
            <Row>
                <Col className="text-center py-3">Copyright &copy; JYJ</Col>
            </Row>
        </Container>
    </div>
  )
}

export default Footer