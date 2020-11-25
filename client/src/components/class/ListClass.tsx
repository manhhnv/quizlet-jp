import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { createClass, deleteClass, updateClass } from '../../redux/actions/classActions'
import Class from './Class';
import { CreateClassInput,  UpdateClassInput } from '../../types';
import { Col, Container, Row } from 'react-bootstrap';
import { AiFillFolderAdd } from 'react-icons/ai';
import AddClassForm from './AddClassForm';
import VerticalNav from '../layouts/VerticalNav';

const ListClass = ({ classes, deleteClass, createClass, user, updateClass }: any) => {
    const { addToast } = useToasts();
    const [showCreateClass, setShowCreateClass] = useState(false);
    const hideCreateClassCreateClass = () => {
        setShowCreateClass(false);
    }
    return (
        // <Container>
            <Row>
                <Col xs={1} className="col-vertical-res">
                    
                </Col>
            <Col xs={10} className="course-part">
                <div>
                    
                        {classes && classes.list && classes.list.length > 0 ? (
                            classes.list.map((class_: any, index: any) => (
                                <Class
                                    key={index}
                                    class_={class_}
                                    deleteClass={deleteClass}
                                    user={user}
                                    addToast={addToast}
                                    updateClass={updateClass}
                                />
                            ))
                        ) : (<h3>Tạo class ngay</h3>)}
                </div>
            </Col>
            </Row>
            
        // </Container>
    )
}
const mapStateToProps = (state: any) => {
    return {
        classes: state.classes
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        deleteClass: (token: string, class_id: number, addToast: any) => dispatch(deleteClass(token, class_id, addToast)),
        createClass: (token: string, input: CreateClassInput,
            addToast: any) => dispatch(createClass(token, input, addToast)),
        updateClass: (token: string, class_id: number,
            input: UpdateClassInput,
            addToast: any) => dispatch(updateClass(token, class_id, input, addToast))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(ListClass));