import React from 'react';
import { Row, Col, Navbar, Card, Button, Container } from 'react-bootstrap';
import { AiOutlineDelete } from 'react-icons/ai';
import { deleteModule } from '../../redux/actions/moduleAction';
import { connect } from 'react-redux';
import { useToasts } from "react-toast-notifications";

const ModuleCard = ({ id, name, description, create_at, author, user, deleteModule}: any) => {
    const { addToast } = useToasts();
    return (
        <Card  className="card-container">
            <Card.Header className="created-at">
                <AiOutlineDelete className="delete-module" onClick={() => deleteModule(user.token, addToast, id)}/>
                </Card.Header>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
            
            <Card.Footer className="author-name" style={{backgroundColor: "white", display: "flex", justifyContent: "flex-end"}}>create by: {author}</Card.Footer>
        </Card>
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
        deleteModule: (token: String, addToast: any, id: any) => dispatch(deleteModule(token, addToast, id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(ModuleCard))

