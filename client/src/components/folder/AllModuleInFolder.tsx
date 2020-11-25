import React, { useEffect } from 'react'
import { Row, Col, Card, Spinner, OverlayTrigger, Tooltip, Button } from 'react-bootstrap';
import { getModulesInFolder } from '../../redux/actions/folderActions';
import { connect } from 'react-redux';
import { AiOutlineDelete } from 'react-icons/ai';

const AllModuleInFolder = ({ user, folder, getModulesInFolder, addToast, folders, deleteModuleFromFolder }: any) => {
    useEffect(() => {
        if (user?.token) {
            getModulesInFolder(user.token, folder.id, addToast)
        }
    }, [])
    return (
        <React.Fragment>
            {folders && folders.totalModules > 0 ? (
                <Row className="list-module-folder">
                    <Col sm={1}></Col>
                    <Col sm={11}>
                        <Row>
                            {folders.modules.map((module: any, i: any) => (
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
                                                    onClick={() => deleteModuleFromFolder(user.token, module.id, folder.id, addToast)}

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
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(AllModuleInFolder));
