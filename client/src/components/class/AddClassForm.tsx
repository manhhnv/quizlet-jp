import React, { useRef } from 'react';
import { Modal, Form } from 'react-bootstrap';
import { convertRefToObject } from '../../helper/converRefToObj';

const AddClassForm = ({
    showCreateClass,
    hideUpdateClassCreateClass,
    createClass,
    user,
    addToast
}: any) => {
    const classRef: any = useRef([]);
    const createClassHandle = () => {
        const input = convertRefToObject(classRef.current)
        createClass(user.token, input, addToast)
        hideUpdateClassCreateClass()
    }
    return (
        <Modal show={showCreateClass} onHide={hideUpdateClassCreateClass}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Thêm class mới
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="login-form-container">
                    <Form>
                        <Form.Control
                            placeholder="Nhập tiêu đề..."
                            name="name"
                            className="login-form"
                            ref={(el: any) => (classRef.current['name'] = el)}
                            required
                        >
                        </Form.Control>
                        <Form.Control
                            as="select"
                            name="public"
                            ref={(el: any) => (classRef.current['public'] = el)}
                            className="login-form"
                            defaultValue={1}
                        >
                            <option value={1}>Mọi người</option>
                            <option value={0}>Chỉ mình tôi</option>
                        </Form.Control>
                        <Form.Control
                            type="button"
                            name="create"
                            value="Tạo thư mục"
                            className="login-button"
                            onClick={createClassHandle}
                        >
                        </Form.Control>
                    </Form>
                </div>
            </Modal.Body>
        </Modal>
    )
}
export default AddClassForm;