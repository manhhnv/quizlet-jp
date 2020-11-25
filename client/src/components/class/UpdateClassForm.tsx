import React, {useRef} from 'react';
import { Modal, Form } from 'react-bootstrap';
import { convertRefToObject } from '../../helper/converRefToObj';

const UpdateClassForm = ({
    showUpdateClass,
    hideUpdateClassCreateClass,
    user,
    addToast,
    class_,
    updateClass
}: any) => {
        const classRef: any = useRef([]);
        const updateFolderHandle = () => {
            const input = convertRefToObject(classRef.current)
            console.log(input)
            updateClass(user.token, class_.id, input, addToast)
            hideUpdateClassCreateClass()
        }
    return (
        <Modal show={showUpdateClass} onHide={hideUpdateClassCreateClass}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Sửa đổi thư mục
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
                            defaultValue={class_?.name}
                            required
                        >
                        </Form.Control>
                        <Form.Control
                            as="select"
                            name="public"
                            ref={(el: any) => (classRef.current['public'] = el)}
                            className="login-form"
                            defaultValue={class_?.public}
                        >
                            <option value={1}>Mọi người</option>
                            <option value={0}>Chỉ mình tôi</option>
                        </Form.Control>
                        <Form.Control
                            type="button"
                            name="update"
                            value="Xác nhận thay đổi"
                            className="login-button"
                            onClick={updateFolderHandle}
                        >
                        </Form.Control>
                    </Form>
                </div>
            </Modal.Body>
        </Modal>
    )
}
export default React.memo(UpdateClassForm);