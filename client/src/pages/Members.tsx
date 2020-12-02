import React from 'react'
import { Card, Col, Row, Container } from 'react-bootstrap';
import { connect, useSelector } from 'react-redux';
import HeaderPage from '../components/layouts/Header';
import VerticalNav from '../components/layouts/VerticalNav';
import { AiOutlineDelete } from 'react-icons/ai';

export const Members = () => {
    const listMember: any = useSelector((state: any) => state.members)
    return (
        <React.Fragment>
            <Row>
            <Col md={12} className="pd-r-30">
                <HeaderPage></HeaderPage>
            </Col>
            </Row>
            <Row>
                <Col md={3} className="vertical-nav-container">
                    <VerticalNav />
                </Col>
                <Col md={2}></Col>
                <Col md={5} style={{ paddingBottom: "200px", paddingTop: "100px" }}>
                    {listMember && listMember.list.map((m: any, i: number) => (
                        <Card>
                            <Card.Body>
                                <Card.Title as="h6">
                                    {m.username}
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    ))}
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default React.memo(Members)
