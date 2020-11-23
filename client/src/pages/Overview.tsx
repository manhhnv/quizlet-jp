import React, { useState, useEffect } from 'react'
import HeaderPage from '../components/layouts/Header'
import { Row, Col, Navbar, Card, Button, Container } from 'react-bootstrap';
import { FaHome, FaLeaf } from 'react-icons/fa';
import { SiGoogleclassroom } from 'react-icons/si';
import { AiOutlineProject, AiOutlineFolder } from 'react-icons/ai';
import { BsFiles } from 'react-icons/bs';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { me } from '../redux/actions/userAction';
import MainPage from '../components/layouts/MainPage';
import ListModule from '../components/ListModule';
const Overview = ({ user }: any) => {

    const [showList, setShowList] = useState(true);



    const show = (s: any) => {
        setShowList(s);
    }
    const [tabIndex, setTabIndex] = useState(1);
    useEffect(() => {
        me(user.token)
    }, [])
    if (!user?.token) {
        return <Redirect to="/home"></Redirect>
    }
    return (
        <React.Fragment>
            <HeaderPage />
            <Row>
                <Col md={2} className="side-menu-container" style={{ backgroundColor: 'white' }}>
                    <Navbar bg="light" className="side-menu__section-container active">
                        <Navbar.Brand className="side-menu">
                            <div className="side-menu__section">
                                <FaHome style={{ fontSize: 30 }} />
                                <span className="section__text">Home</span>
                            </div>
                        </Navbar.Brand>
                    </Navbar>
                    <Navbar bg="light" className="side-menu__section-container active">
                        <Navbar.Brand className="side-menu">
                            <div className="side-menu__section">
                                <AiOutlineProject style={{ fontSize: 30 }} />
                                <span className="section__text">Progress</span>
                            </div>
                        </Navbar.Brand>
                    </Navbar>

                    <Navbar bg="light" className="side-menu__section-container active">
                        <Navbar.Brand className="side-menu">
                            <div className="side-menu__section">
                                <BsFiles style={{ fontSize: 30 }} />
                                <span className="section__text">Course</span>
                            </div>
                        </Navbar.Brand>
                    </Navbar>

                    <Navbar bg="light" className="side-menu__section-container active">
                        <Navbar.Brand className="side-menu">
                            <div className="side-menu__section">
                                <AiOutlineFolder style={{ fontSize: 30 }} />
                                <span className="section__text">Folder</span>
                            </div>
                        </Navbar.Brand>
                    </Navbar>
                    <Navbar bg="light" className="side-menu__section-container active">
                        <Navbar.Brand className="side-menu">
                            <div className="side-menu__section">
                                <SiGoogleclassroom style={{ fontSize: 30 }} />
                                <span className="section__text">Class</span>
                            </div>
                        </Navbar.Brand>
                    </Navbar>
                    {/* </div> */}
                </Col>

                <Col md={10}>

                    <MainPage show={show} showList={showList} tabIndex={tabIndex} setTabIndex={setTabIndex} user={user} />
                    {tabIndex === 1 ? (
                        <ListModule user={user} />
                    ) : null}
                </Col>
            </Row>
        </React.Fragment>
    )
}
const mapStateToProps = (state: any) => {
    return {
        user: state.user,
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        me: (token: string) => dispatch(me(token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Overview))
