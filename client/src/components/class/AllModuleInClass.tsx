import React, { useEffect } from 'react'
import { Row, Col, Card, Spinner, OverlayTrigger, Tooltip, Button } from 'react-bootstrap';
import { getModulesInFolder } from '../../redux/actions/folderActions';
import { connect } from 'react-redux';
import { AiOutlineDelete } from 'react-icons/ai';

const AllModuleInClass = ({ user, class_, getModulesInClass, addToast, classes, deleteModuleFromClass }: any) => {
    useEffect(() => {
        if (user?.token) {
          getModulesInClass(user.token, class_.id, addToast)
        }
    }, [addToast, class_.id, getModulesInClass, user])
    return (
        <React.Fragment>
            {classes && classes.totalModules > 0 ? (
                <Row className="list-module-folder">
                    <Col sm={1}></Col>
                    <Col sm={11}>
                        <Row>
                            {classes.modules.map((module: any, i: any) => (
                                <Card className="module-item" key={i}>
                                    <Card.Body>
                                        <Card.Title>{module.name}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">
                                            <img src={user?.user?.avatar ? `${user?.user?.avatar}` : require('../../assets/avatar.png')} className="avatar-small" />
                                            {" " + user?.user?.username}
                                        </Card.Subtitle>
                                        <Card.Text>
                                            {module?.description}
                                        </Card.Text>
                                        <Card.Link>
                                            <OverlayTrigger
                                                placement="bottom"
                                                overlay={
                                                    <Tooltip id="folder-delete">
                                                        Xóa học phần
                                                     </Tooltip>
                                                }
                                            >
                                                <Button
                                                    variant="outline-danger"
                                                    className="folder-actions"
                                                    onClick={() => deleteModuleFromClass(user.token, module.id, class_.id, addToast)}
                                                >
                                                    <AiOutlineDelete />
                                                </Button>
                                            </OverlayTrigger>
                                        </Card.Link>
                                    </Card.Body>
                                </Card>
                            ))}
                        </Row>
                    </Col>
                </Row>
            ) : (
                    <Row style={{ marginTop: "100px" }} className="d-flex justify-content-center">
                        <Spinner animation="border" variant="primary"></Spinner>
                    </Row>
                )}
        </React.Fragment>
    )
}
const mapStateToProps = (state: any) => {
    return {
        folders: state.folders
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        getModulesInFolder: (token: string, folder_id: number, addToast: any) => dispatch(getModulesInFolder(token, folder_id, addToast))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(AllModuleInClass));
