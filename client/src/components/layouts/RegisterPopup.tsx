import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { FcGoogle } from 'react-icons/fc';
import { AiFillFacebook } from 'react-icons/ai';

const RegisterPopup = ({showRegister, closeRegisterPopup}: any) => {

  return (
    <>

      <Modal
        show={showRegister}
        onHide={closeRegisterPopup} 
    
      >
            <Modal.Header closeButton style={{backgroundColor: "white"}}>
                <Modal.Title style={{color: "black"}}>Đăng Ký</Modal.Title>
            </Modal.Header>
            <Modal.Body >

            <div className="social-api-container">
                <div className="api-container">
                    <FcGoogle className="login-social-icon google" style={{fontSize: "2rem"}}/>
                    <div>Tiếp tục với Google</div>
                </div>
                <div className="api-container">
                    <AiFillFacebook className="login-social-icon facebook" style={{fontSize: "2rem"}}/>
                    <div>Tiếp tục với Facebook</div>
                </div>
            </div>   
            <hr style={{backgroundColor: "black"}}/>

            <div className="fomr-container">

            </div>
            

            </Modal.Body>
      </Modal>
    </>
  );
}


export default RegisterPopup;
