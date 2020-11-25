import React, { useRef } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { convertRefToObject } from '../../helper/converRefToObj';

const AddModuleToClass = ({
    showAddModule,
    hideAddModuleModal,
    user,
    addToast,
    module,
    class_,
    assignModuleToClass
}: any) => {
    const moduleRef: any = useRef([]);
    const assignModuleToClassHandle = (module_id: number) => {
      assignModuleToClass(user.token, module_id, class_.id, addToast);
        hideAddModuleModal();
    }
    return (
        <Modal show={showAddModule} onHide={hideAddModuleModal}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Thêm học phần
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="add-module-folder-container">
                    <div className="create-option">
                        <h4>Học phần của bạn</h4>
                        <div className="import-modules">
                            {module && module.list.length > 0 ? module.list.map((item: any, i: any) => (
                                <div key={i} className="your-module">
                                    {item.name}
                                    <Button onClick={() => assignModuleToClassHandle(item.id)}>+</Button>
                                </div>
                            )) : null}
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default AddModuleToClass;
