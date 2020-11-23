import React, {useState} from 'react';
import { Button, Card } from 'react-bootstrap';
import { AiOutlineDelete, AiFillSetting, AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import UpdateFolderForm from './UpdateFolderForm';
const Folder = ({ folder, deleteFolder, addToast, user, updateFolder }: any) => {
    const [showUpdateFolder, setShowUpdateFolder] = useState(false);
    const hideUpdateFolderCreateFolder = () => {
        setShowUpdateFolder(false);
    }
    return (
        <Card className="card-container">
            <Card.Header className="curd-control">
                <Button variant="outline-danger">
                    <AiOutlineDelete className="delete-module" onClick={() => deleteFolder(user.token, folder.id, addToast)} />
                </Button>
                <Button variant="primary" onClick={() => setShowUpdateFolder(true)}>
                    <AiFillSetting className="delete-module" />
                </Button>
                <UpdateFolderForm
                    folder={folder}
                    showUpdateFolder={showUpdateFolder}
                    hideUpdateFolderCreateFolder={hideUpdateFolderCreateFolder}
                    user={user}
                    addToast={addToast}
                    updateFolder={updateFolder}
                />
            </Card.Header>
            <Card.Body>
                <Card.Title>{folder?.name}</Card.Title>
                <Card.Text>
                    {folder?.description}
                </Card.Text>
                <Card.Text style={{fontWeight: "bold"}}>
                    Chế độ: {folder.public == 1 ? (<AiOutlineEye />) : (<AiOutlineEyeInvisible/>)}
                </Card.Text>
            </Card.Body>

            <Card.Footer className="author-name" style={{ backgroundColor: "white", display: "flex", justifyContent: "flex-end" }}>
                Created by: {user?.user?.username}
            </Card.Footer>
        </Card>
    )
}
export default Folder;