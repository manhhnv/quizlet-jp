import React from 'react';
import { Card } from 'react-bootstrap';
import { AiOutlineDelete } from 'react-icons/ai';
import { useToasts } from "react-toast-notifications";

const ModuleCard = ({ deleteModule, module, user}: any) => {
    const { addToast } = useToasts();
    return (
        <Card  className="card-container">
            <Card.Header className="created-at">
                <AiOutlineDelete className="delete-module" onClick={() => deleteModule(user.token, addToast, module?.id)}/>
                </Card.Header>
            <Card.Body>
                <Card.Title>{module?.name}</Card.Title>
                <Card.Text>
                    {module?.description}
                </Card.Text>
            </Card.Body>
            
            <Card.Footer className="author-name" style={{backgroundColor: "white", display: "flex", justifyContent: "flex-end"}}>create by: {user?.user?.username}</Card.Footer>
        </Card>
    )
}


export default React.memo(ModuleCard);

