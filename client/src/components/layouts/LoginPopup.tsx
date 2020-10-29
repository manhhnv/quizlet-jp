import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { FaApple, FaFacebook, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const LoginPopup = ({show, closeLoginPopup}: any) => {
    return (
        <Modal show={show} onHide={closeLoginPopup}>
            <Modal.Header closeButton>
                <Modal.Title>Đăng nhập</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="login-social-api">
                    <FaGoogle className="login-social-icon"/>
                    Đăng nhập bằng Google
                </div>
                <div className="login-social-api">
                    <FaFacebook className="login-social-icon" />
                    Đăng nhập bằng Facebook
                </div>
                <div className="login-social-api">
                    <FaApple className="login-social-icon" />
                    Đăng nhập bằng Apple
                </div>
                <div className="login-form-container">
                    <Form method="POST">
                        <Form.Control
                            placeholder="Điền tên người dùng..."
                            name="username"
                            className="login-form"
                            required
                        >

                        </Form.Control>
                        <Form.Control
                            type="password"
                            placeholder="Mật khẩu..."
                            name="password"
                            className="login-form"
                            required
                        >
                        </Form.Control>
                        <span className="forget-password">
                            <Link to="/overview">Quên mật khẩu</Link>
                        </span>
                        <Form.Control
                            type="submit"
                            name="login"
                            value="Đăng nhập"
                            className="login-button"
                        >
                        </Form.Control>
                    </Form>
                </div>
            </Modal.Body>
        </Modal>
    )
}
export default LoginPopup;