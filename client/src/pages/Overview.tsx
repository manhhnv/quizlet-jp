import React from 'react'
import HeaderPage from '../components/layouts/Header'
import { Row, Col, Navbar, Card, Button, Container } from 'react-bootstrap';
import { FaHome, FaLeaf } from 'react-icons/fa';
import { SiGoogleclassroom } from 'react-icons/si';
import { AiOutlineProject, AiOutlineFolder } from 'react-icons/ai';
import { BsFiles } from 'react-icons/bs';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MainPage from '../components/layouts/MainPage';
import ModuleCard from '../components/layouts/ModuleCard';
import { allModules } from '../redux/actions/moduleAction';
const Overview = ({ user, allModules, module }: any) => {


    if (!user?.token) {
        return <Redirect to="/home"></Redirect>
    }
    return (
        <React.Fragment>
            <HeaderPage></HeaderPage>
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
                    <MainPage />
                    <Col md={12}>

                        {
                            module.map((item: any) => {
                                // console.log(user.user.filter((ittem: any) => ittem.id === item.id))
                                return (
                                    <React.Fragment key={item.id}>
                                        <ModuleCard name={item.name}
                                            description={item.description}
                                            create_at={item.created_at}
                                            author={user.user.username}
                                        ></ModuleCard>
                                    </React.Fragment>
                                )
                            })

                        }
                        <Link to="/course" style={{ textDecoration: 'none' }}>

                            <button className="add-course">Tạo học phần </button>

                        </Link>
                    </Col>

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
        allModules: (token: String) => dispatch(allModules(token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Overview))
