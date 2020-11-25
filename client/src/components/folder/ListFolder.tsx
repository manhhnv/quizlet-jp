import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { deleteFolder, createFolder, updateFolder } from '../../redux/actions/folderActions';
import Folder from './Folder';
import { CreateFolderInput, UpdateFolderInput } from '../../types';
import { Col, Container, Row } from 'react-bootstrap';
import { AiFillFolderAdd } from 'react-icons/ai';
import AddFolderForm from './AddFolderForm';
import VerticalNav from '../layouts/VerticalNav';

const ListFolder = ({ folders, deleteFolder, createFolder, user, updateFolder }: any) => {
    const { addToast } = useToasts();
    const [showCreateFolder, setShowCreateFolder] = useState(false);
    const hideCreateFolderCreateFolder = () => {
        setShowCreateFolder(false);
    }
    return (
        // <Container>
            <Row>
                <Col xs={1} className="col-vertical-res">
                    
                </Col>
            <Col xs={10} className="course-part">
                <div>
                    
                        {folders && folders.list && folders.list.length > 0 ? (
                            folders.list.map((folder: any, index: any) => (
                                <Folder
                                    key={index}
                                    folder={folder}
                                    deleteFolder={deleteFolder}
                                    user={user}
                                    addToast={addToast}
                                    updateFolder={updateFolder}
                                />
                            ))
                        ) : (<h3>Tạo thư mục ngay</h3>)}
                </div>
            </Col>
            </Row>
            
        // </Container>
    )
}
const mapStateToProps = (state: any) => {
    return {
        folders: state.folders
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        deleteFolder: (token: string, folder_id: number, addToast: any) => dispatch(deleteFolder(token, folder_id, addToast)),
        createFolder: (token: string, input: CreateFolderInput,
            addToast: any) => dispatch(createFolder(token, input, addToast)),
        updateFolder: (token: string, folder_id: number,
            input: UpdateFolderInput,
            addToast: any) => dispatch(updateFolder(token, folder_id, input, addToast))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(ListFolder));