import React, {useState} from 'react';
import {Button, Col, Form, Modal, Row} from 'react-bootstrap';
import {connect} from 'react-redux';
import {useToasts} from "react-toast-notifications";
import {AiOutlinePlus} from "react-icons/ai";
import {addTerm} from "../redux/actions/termAction";

const TermAdd = ({user, showAddTerm, closeTermPopup, currentModule, addTerm}: any) => {

    const [validated, setValidated] = useState(false);
    const [data, setData] = useState([{
        term: "",
        mean: "",
    }]);
    const {addToast} = useToasts();

    const handleChangeTerm = (e: any, index: number) => {
        console.log(e, index);
        let arr = [...data];
        arr[index].term = e.target.value;
        setData(arr);
    }
    const handleChangeMean = (e: any, index: number) => {
        let arr = [...data];
        arr[index].mean = e.target.value;
        setData(arr);
    }

    const handleCreateMoreTerm = () => {
        setData([...data, {term: "", mean: ""}]);
    }


    const handleSubmit = (e: any) => {
        console.log("is oke")
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
            console.log("validateFalse");
        } else {
            e.preventDefault();
            data.forEach(e => {
                const params = {
                    question: e.term,
                    explain: e.mean,
                    module_id: currentModule.id,
                };
                addTerm(user.token, addToast, params);
            })
        }
        setValidated(true);
    }


    return (
        <Modal show={showAddTerm} onHide={closeTermPopup} dialogClassName="my-modal">
            <Modal.Header closeButton>
                <Modal.Title>Thêm định nghĩa mới</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {data.map((e) => {
                    return (
                        <>
                            <Row>
                                <Col md={6}>
                                    <Form id="thatform" noValidate validated={validated} onSubmit={handleSubmit}>
                                        <Form.Group as={Col}>
                                            <Form.Label>Thuật ngữ</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Nhập thuật ngữ..."
                                                value={e.term}
                                                name="title"
                                                className="login-form"
                                                required
                                                style={{borderBottomColor: "black"}}
                                                onChange={(event: any) => handleChangeTerm(event, data.indexOf(e))}
                                            >
                                            </Form.Control>
                                            <Form.Control.Feedback type="invalid">
                                                Bạn phải nhập thuật ngữ.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Form>
                                </Col>
                                <Col md={6}>
                                    <Form id="thatform" noValidate validated={validated} onSubmit={handleSubmit}>
                                        <Form.Group as={Col}>
                                            <Form.Label>Định nghĩa</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Nhập định nghĩa..."
                                                value={e.mean}
                                                name="title"
                                                className="login-form"
                                                required
                                                style={{borderBottomColor: "black"}}
                                                onChange={(event: any) => handleChangeMean(event, data.indexOf(e))}
                                            >
                                            </Form.Control>
                                            <Form.Control.Feedback type="invalid">
                                                Bạn phải nhập định nghĩa.
                                            </Form.Control.Feedback>
                                        </Form.Group>


                                    </Form>
                                </Col>
                            </Row>
                        </>
                    )
                })}
                <Col><AiOutlinePlus className="create-module" style={{marginLeft: "1rem"}}
                                    onClick={handleCreateMoreTerm}/></Col>
            </Modal.Body>
            <Modal.Footer>
                <Button style={{width: "100%", backgroundColor: " #3ccfcf", border: "none"}} type="submit"
                        form="thatform">Lưu</Button>
            </Modal.Footer>

        </Modal>
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
        addTerm: (token: String, addToast: any, data: object) => dispatch(addTerm(token, addToast, data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(TermAdd));
