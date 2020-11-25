import React, { useState, useRef, useEffect } from 'react';
import { BiAddToQueue } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';
import LoginPopup from './LoginPopup';
import RegisterPopup from './RegisterPopup';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Modal, Button, Form, Col, Row } from 'react-bootstrap';
import { logout } from '../../redux/actions/userAction';
import { userInfo } from 'os';
const Header = ({ user, logout }: any) => {
    const [show, setShow] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [logoutModal, setLogoutModal] = useState(false);

    const closeLoginPopup = () => {
        setShow(false);
    };
    const openLoginPopup = () => {
        setShow(true);
    };
    const closeRegisterPopup = () => {
        setShowRegister(false);
    };
    const openRegisterPopup = () => {
        setShowRegister(true);
    };
    const openLogout = () => {
        setLogoutModal(true);
    }
    const closeLogout = () => {
        setLogoutModal(false);
    };
    const handleLogout = (token: String) => {
        setLogoutModal(false);
        logout(token);
    }

    return (
        <React.Fragment>
            <LoginPopup show={show} closeLoginPopup={closeLoginPopup} />
            <RegisterPopup showRegister={showRegister} closeRegisterPopup={closeRegisterPopup} openLoginPopup={openLoginPopup} />
            <div className="header-container">
                <div className="left-container">
                    <div className='left'>
                        <Link to={user.token ? "/overview" : "/home"} >
                            <div aria-label="Quizlet" className="SiteLogo" role="img" title="Quizlet">
                                <svg fill="currentColor" viewBox="0 0 244 53" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M26.99 1.09c15.382 0 26.99 11.36 26.99 25.883 0 6.687-2.54 12.583-6.676 17.04l7.182 7.98H42.37l-2.49-2.847c-3.6 2.482-8.102 3.638-12.89 3.638C11.68 52.784 0 41.496 0 26.974 0 12.017 12.116 1.09 26.99 1.09zm0 41.7c2.03 0 3.844-.43 5.586-1.15L22.2 29.993h12.117l5.587 6.4c2.03-2.518 2.974-5.537 2.974-9.42 0-8.698-6.6-15.817-15.89-15.817-9.287 0-15.814 7.046-15.814 15.817 0 8.915 6.527 15.818 15.815 15.818zM61.035 15.76H71.99v20.706c0 4.89 3.048 6.686 6.676 6.686 3.627 0 6.675-1.797 6.675-6.686V15.758h10.956v21.64C96.296 48.04 88.026 53 78.666 53s-17.63-4.96-17.63-15.6V15.757zm42.75 36.235h10.81V15.758h-10.81v36.235zm-.992-45.69c0-3.56 2.92-6.303 6.36-6.303 3.518 0 6.36 2.743 6.36 6.303 0 3.485-2.842 6.23-6.36 6.23-3.44 0-6.36-2.745-6.36-6.23zm35.738 18.873h-16.74v-9.418h35.332l-20.15 26.817h19.133v9.418h-37.94l20.365-26.817zm23.67 26.817h10.81V1.883H162.2v50.11zm17.063-18.19c0-11.503 8.272-18.908 19.372-18.908 11.173 0 18.5 8.196 18.5 18.334 0 0 0 2.03-.217 3.684h-26.843c.218 4.314 3.48 6.883 9.648 6.883 6.966 0 10.883-2.085 12.987-3.523v9.347c-3.41 2.157-7.182 3.308-13.567 3.308-12.263 0-19.88-7.405-19.88-18.765v-.36zm26.99-4.026c0-3.235-3.337-5.967-7.618-5.967-4.498 0-8.27 2.66-8.488 5.967h16.105zm19.172-4.313h-4.86v-9.706h4.86V1.882h10.52v13.876H244v9.706h-8.054v26.53h-10.52v-26.53z" fillRule="evenodd">
                                    </path>
                                </svg>
                            </div>
                        </Link>
                    </div>

                    <div className="right">
                        <div>
                            <AiOutlineSearch className="icon" />
                            <div>Tìm kiếm</div>
                        </div>
                        <div className="line">
                            |
                                </div>
                        <div>
                            <BiAddToQueue className="icon" />
                            <div>Tạo</div>
                        </div>
                    </div>



                </div>
                {console.log("++++++", user)}
                <div className="rigth-container">
                    {user?.token ? (
                        <div>

                            <img src={user?.user?.avatar ? `${user?.user?.avatar}`: require('../../assets/avatar.png')} alt="Avatar" className="avatar" onClick={openLogout} />
                            <div>
                                {

                                    (logoutModal &&

                                        <Modal show={logoutModal} onHide={closeLogout} dialogClassName='custom-dialog-logout'>
                                            <Modal.Header style={{ backgroundColor: "white" }}>
                                                <Row style={{ width: "100%", flexDirection: "row", justifyContent: "space-between", alignContent: "center", alignItems: "center" }}>
                                                    <img src={require('../../assets/avatar.png')} alt="Avatar" className="avatar" />
                                                    <div style={{ color: "black" }}>{user.user.username}</div>
                                                </Row>
                                            </Modal.Header>
                                            <Modal.Body className="logoutCon" onClick={() => handleLogout(user.token)}>

                                                <Row style={{ flexDirection: "row", justifyContent: "space-around", alignContent: "center", alignItems: "center" }}>
                                                    <FiLogOut style={{ fontSize: 30 }} />
                                                    <div className="logout-button">Đăng xuất</div>

                                                </Row>

                                            </Modal.Body>

                                        </Modal>

                                    )
                                }

                            </div>
                        </div>


                    ) : (
                            <React.Fragment>
                                <div className="button signin" onClick={openLoginPopup}>
                                    Đăng nhập
                            </div>
                                <div className="button signup" onClick={openRegisterPopup}>
                                    Đăng Ký
                            </div>
                            </React.Fragment>
                        )}
                </div>

            </div>
        </React.Fragment>
    )
}
const mapStateToProps = (state: any) => {
    return {
        user: state.user
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        logout: (token: String) => dispatch(logout(token))
    }
} 
export default connect(mapStateToProps,  mapDispatchToProps)(React.memo(Header));