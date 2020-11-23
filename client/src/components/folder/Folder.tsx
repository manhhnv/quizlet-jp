import React from 'react';
import { Card } from 'react-bootstrap';
import { AiOutlineDelete } from 'react-icons/ai';
const Folder = ({ folder, deleteFolder, addToast, user }: any) => {
    return (
        <Card className="card-container">
            <Card.Header className="created-at">
                <AiOutlineDelete className="delete-module" onClick={() => deleteFolder(user.token, addToast, module?.id)} />
            </Card.Header>
            <Card.Body>
                <Card.Title>{folder?.name}</Card.Title>
                <Card.Text>
                    {folder?.description}
                </Card.Text>
            </Card.Body>

            <Card.Footer className="author-name" style={{ backgroundColor: "white", display: "flex", justifyContent: "flex-end" }}>create by: {user?.user?.username}</Card.Footer>
        </Card>
    )
}
export default Folder;