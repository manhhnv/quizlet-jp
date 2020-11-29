import { from } from '@apollo/client';
import React from 'react';
import { Modal, Form, Row, Col, Button } from 'react-bootstrap';

const SearchBox = ({
    showSearchBox,
    hideSearchBox
}: any) => {
    return (
        <Modal show={showSearchBox} onHide={hideSearchBox}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Tìm kiếm
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="add-module-folder-container">
                    <Form>
                        <Row>
                            <Col sm={9}>
                                <Form.Group>
                                    <Form.Control
                                        placeholder="Từ khóa"
                                        name="name"
                                        className="login-form"
                                    />
                                </Form.Group>
                            </Col>
                            <Col sm={3}>
                                <Button  variant="success">
                                    Tìm kiếm
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default SearchBox
