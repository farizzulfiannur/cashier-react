import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import './style/component.css';

export default class list extends Component {
  render() {
    return (
        <Col md={2} className='mt-3'>
            <h4> List Kategory </h4>
            <hr/>
        </Col>
    )
  }
}
