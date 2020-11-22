import React from 'react';
import { Row, Col, Navbar, Card, Button, Container } from 'react-bootstrap';
import { AiOutlineDelete } from 'react-icons/ai';
import { deleteModule } from '../../redux/actions/moduleAction';
import { connect } from 'react-redux';
import { useToasts } from "react-toast-notifications";

const ModuleCard = ({ id, name, description, create_at, author, user}: any) => {
    const { addToast } = useToasts();
    const handleDelete = (id: any) => {
        console.log(id);
        deleteModule(user.token, addToast, id);
    }
    return (
        <Card  className="card-container">
            <Card.Header style={{backgroundColor: "white", display: "flex", justifyContent:"space-between"}}>
                {create_at}
                <AiOutlineDelete style={{fontSize:"2rem", cursor: "pointer"}} onClick={() => handleDelete(id)}/>
                </Card.Header>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button variant="primary" className="start-learn">Bắt đầu học</Button>
            </Card.Body>
            
            <Card.Footer className="text-muted" style={{backgroundColor: "white", display: "flex", justifyContent: "flex-end"}}>create by: {author}</Card.Footer>
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

