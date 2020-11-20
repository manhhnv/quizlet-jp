import React from 'react'
import HeaderPage from '../components/layouts/Header'
import { Row, Col, Navbar, Card, Button, Container } from 'react-bootstrap';
import { FaHome, FaLeaf } from 'react-icons/fa';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
const Overview = ({user}: any) => {
    if (!user?.token) {
        return <Redirect to="/home"></Redirect>
    }
    return (
        <React.Fragment>
            <HeaderPage></HeaderPage>
            <Row>
                <Col md={2} className="side-menu-container" style={{backgroundColor: 'white'}}>
                    <Navbar bg="light" className="side-menu__section-container active">
                        <Navbar.Brand className="side-menu">
                            <div className="side-menu__section">
                                <FaHome/>
                                <span className="section__text">Home</span>
                            </div>
                        </Navbar.Brand>
                    </Navbar>
                    <Navbar bg="light" className="side-menu__section-container active">
                        <Navbar.Brand className="side-menu">
                            <div className="side-menu__section">
                                <FaLeaf/>
                                <span className="section__text">Course</span>
                            </div>
                        </Navbar.Brand>
                    </Navbar>
                    <Navbar bg="light" className="side-menu__section-container active">
                        <Navbar.Brand className="side-menu">
                            <div className="side-menu__section">
                                <FaHome/>
                                <span className="section__text">Home</span>
                            </div>
                        </Navbar.Brand>
                    </Navbar>
                    <Navbar bg="light" className="side-menu__section-container active">
                        <Navbar.Brand className="side-menu">
                            <div className="side-menu__section">
                                <FaHome/>
                                <span className="section__text">Home</span>
                            </div>
                        </Navbar.Brand>
                    </Navbar>
                    <Navbar bg="light" className="side-menu__section-container active">
                        <Navbar.Brand className="side-menu">
                            <div className="side-menu__section">
                                <FaHome/>
                                <span className="section__text">Home</span>
                            </div>
                        </Navbar.Brand>
                    </Navbar>
                </Col>
                <Col md={1}></Col>
                <Col md={8} style={{paddingBottom: '150px'}}>
                    <Container>
                        <Row style={{paddingTop: '40px'}}>
                            <Col lg={12}>
                                <Card>
                                    <Card.Img style={{width: '7.5rem', height: '8.75rem'}} variant="top" src="https://assets.quizlet.com/a/i/next_action/create-set.d180318ff2be4ad.svg" />
                                    <Card.Body>
                                        <Card.Title>Tạo một học phần cho môn bất kỳ bạn muốn dạy</Card.Title>
                                        <Button variant="success">Start Now</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <span style={{paddingTop: '40px'}}>Recent</span>
                        <Row style={{paddingTop: '20px'}}>
                            <Col md={6}>
                                <Card>
                                    <Card.Img style={{width: '7.5rem', height: '8.75rem'}} variant="top" src="https://assets.quizlet.com/a/i/next_action/create-set.d180318ff2be4ad.svg" />
                                    <Card.Body>
                                        <Card.Title>Tạo một học phần cho môn bất kỳ bạn muốn dạy</Card.Title>
                                        <Button variant="success">Start Now</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card>
                                    <Card.Img style={{width: '7.5rem', height: '8.75rem'}} variant="top" src="https://assets.quizlet.com/a/i/next_action/create-set.d180318ff2be4ad.svg" />
                                    <Card.Body>
                                        <Card.Title>Tạo một học phần cho môn bất kỳ bạn muốn dạy</Card.Title>
                                        <Button variant="success">Start Now</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row style={{paddingTop: '40px'}}>
                            <Col md={6}>
                                <Card>
                                    <Card.Img style={{width: '7.5rem', height: '8.75rem'}} variant="top" src="https://assets.quizlet.com/a/i/next_action/create-set.d180318ff2be4ad.svg" />
                                    <Card.Body>
                                        <Card.Title>Tạo một học phần cho môn bất kỳ bạn muốn dạy</Card.Title>
                                        <Button variant="success">Start Now</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card>
                                    <Card.Img style={{width: '7.5rem', height: '8.75rem'}} variant="top" src="https://assets.quizlet.com/a/i/next_action/create-set.d180318ff2be4ad.svg" />
                                    <Card.Body>
                                        <Card.Title>Tạo một học phần cho môn bất kỳ bạn muốn dạy</Card.Title>
                                        <Button variant="success">Start Now</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </React.Fragment>
    )
}
const mapStateToProps = (state: any) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps, null)(React.memo(Overview))
