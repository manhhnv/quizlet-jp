import React, { useEffect } from 'react'
import { Row, Col, Card, Spinner, OverlayTrigger, Tooltip, Button } from 'react-bootstrap';
import { getModulesInClass } from '../../redux/actions/classActions';
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
                <React.Fragment>
                    <Row style={{ marginTop: "15px" }} className="d-flex justify-content-center">
                        <h3>Học phần</h3>
                    </Row>
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
                </React.Fragment>
            ) : (
                    <Row style={{ marginTop: "100px" }} className="d-flex justify-content-center">
                        <h3>Chưa có học phần nào trong lớp học</h3>
                    </Row>
                )}
        </React.Fragment>
    )
}
// const mapStateToProps = (state: any) => {
//     return {
        
//     }
// }
const mapDispatchToProps = (dispatch: any) => {
    return {
        getModulesInClass: (token: string, class_id: number, addToast: any) => dispatch(getModulesInClass(token, class_id, addToast))
    }
}
export default connect(null, mapDispatchToProps)(React.memo(AllModuleInClass));
