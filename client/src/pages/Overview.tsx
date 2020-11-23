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
import ModuleCard from '../components/layouts/ModuleCard';
import { allModules } from '../redux/actions/moduleAction';
import { Placeholder } from 'semantic-ui-react'
const Overview = ({ user, allModules, module }: any) => {

    const [showList, setShowList] = useState(true);

    const show = (s: any) => {
        setShowList(s);
    }

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
                    {/* <div className="side-menu-container" style={{backgroundColor: 'white'}}> */}
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
                    <Link to="/course" style={{ textDecoration: "none" }}>
                        <Navbar bg="light" className="side-menu__section-container active">
                            <Navbar.Brand className="side-menu">
                                <div className="side-menu__section">
                                    <BsFiles style={{ fontSize: 30 }} />
                                    <span className="section__text">Course</span>
                                </div>
                            </Navbar.Brand>
                        </Navbar>
                    </Link>
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

                    <MainPage show={show} showList={showList} />

                    {showList == true && module.list && module.list.length > 0 ? (
                        <Col md={12} className="course-part">
                            <div style={{ display: "flex", justifyContent: "flex-start" }}>
                                <div>
                                    {
                                        module.list.map((item: any) => {
                                            return (
                                                <React.Fragment key={item.id}>
                                                    <ModuleCard
                                                        id={item.id}
                                                        name={item.name}
                                                        description={item.description}
                                                        create_at={item.created_at}
                                                        author={user.user.username}
                                                    ></ModuleCard>
                                                </React.Fragment>
                                            )
                                        })

                                    }
                                </div>

                                <Link to="/course" style={{ textDecoration: 'none' }}>

                                    <button className="add-course">Tạo học phần </button>

                                </Link>
                            </div>
                        </Col>
                    ) : <>
                            <h3 className="no-modules-notification">
                                Bạn chưa tạo học phần nào
                            <br />
                                <Link to="/course" style={{ textDecoration: 'none' }}>

                                    <button className="add-course" style={{ marginTop: "20px" }}>Tạo học phần </button>

                                </Link>
                            </h3>
                            <Placeholder>
                                <Placeholder.Header image>
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                </Placeholder.Header>
                                <Placeholder.Paragraph>
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                </Placeholder.Paragraph>
                            </Placeholder>
                        </>
                    }
                </Col>


            </Row>
        </React.Fragment>
    )
}
const mapStateToProps = (state: any) => {
    return {
        user: state.user,
        module: state.module
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        me: (token: string) => dispatch(me(token)),
        allModules: (token: String) => dispatch(allModules(token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Overview))
