import React from 'react'
import { Col, Row } from 'react-bootstrap';
import HeaderPage from '../components/layouts/Header';
import SearchOptions from '../components/search/SearchOptions';

const Search = () => {
    return (
        <React.Fragment>
            <Row>
                <Col md={12}>
                    <HeaderPage />
                </Col>
            </Row>
            <Row>
                <Col md={3} className="vertical-nav-container">
                    <SearchOptions></SearchOptions>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Search
