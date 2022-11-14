import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, Row } from 'reactstrap'

export const BtnBackComponent = (props) => {
  return (
    <Row className='mb-2'>
        <Col>
        <Link to={"/"+ props.UrlTarget}>
            <Button color='dark'>
                <FontAwesomeIcon icon={faArrowLeft}> </FontAwesomeIcon> Back
            </Button>
        </Link>
        </Col>
    </Row>

  )
}
