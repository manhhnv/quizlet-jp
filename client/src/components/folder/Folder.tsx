import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { AiOutlineDelete } from 'react-icons/ai';
const Folder = ({ folder, deleteFolder, addToast, user }: any) => {
    return (
        <Card className="card-container">
            <Card.Header className="created-at">
                <Button variant="outline-danger">
                    <AiOutlineDelete className="delete-module" onClick={() => deleteFolder(user.token, folder.id, addToast)} />
                </Button>
            </Card.Header>
            <Card.Body>
                <Card.Title>{folder?.name}</Card.Title>
                <Card.Text>
                    {folder?.description}
                </Card.Text>
            </Card.Body>

            <Card.Footer className="author-name" style={{ backgroundColor: "white", display: "flex", justifyContent: "flex-end" }}>
                create by: {user?.user?.username}
            </Card.Footer>
        </Card>
    )
}
export default Folder;