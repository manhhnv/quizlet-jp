import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { getQuerySearch } from '../helper/getQuerySearch';
import { FOLDER_DETAIL } from '../services/folder/folder.service';
import HeaderPage from '../components/layouts/Header';
import VerticalNav from '../components/layouts/VerticalNav';
import {
    AiOutlineFolder, AiOutlinePlusCircle,
    AiOutlineSetting, AiOutlineShareAlt, AiOutlineDelete
}
    from 'react-icons/ai';
import { deleteFolder, updateFolder } from '../redux/actions/folderActions';
import { UpdateFolderInput } from '../types';
import UpdateFolderForm from '../components/folder/UpdateFolderForm';

const FolderDetail = ({ user, deleteFolder, updateFolder }: any) => {
    const [folder, setFolder]: any = useState(null);
    const query = getQuerySearch();
    const id = query.get('id');
    const code = query.get('code');
    const { addToast } = useToasts();
    const [showUpdateFolder, setShowUpdateFolder] = useState(false);
    const hideUpdateFolderCreateFolder = () => {
        setShowUpdateFolder(false);
    }
    useEffect(() => {
        if (user?.token) {
            Axios.get(`${FOLDER_DETAIL.url}?code=${code}&id=${id}`, {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
                .then(res => {
                    if (res.data !== null) {
                        setFolder(res.data)
                    }
                })
                .catch(e => {
                    addToast("Error when trying get folder", {
                        appearance: "error",
                        autoDismiss: true
                    })
                })
        }
    }, [])
    if (!user?.token) {
        return <Redirect to="/home"></Redirect>
    }
    const deleteFolderHandle = (token: string, folder_id: number, addToast: any) => {
        deleteFolder(token, folder_id, addToast)
    }
    return (
        <React.Fragment>
            <Row>
                <Col md={12}>
                    <HeaderPage></HeaderPage>
                </Col>
            </Row>
            <Row>
                <Col md={3} className="vertical-nav-container">
                    <VerticalNav />
                </Col>
                <Col md={9} style={{ paddingBottom: "200px" }}>
                    {folder !== null ? (
                        <Row className="folder-header">
                            <Col lg={4}>
                                <div className="folder-auhor">
                                    1 học phần {" "} | Tạo bởi<span className="author">{" " + user.user.username}</span>
                                </div>
                                <div className="folder-info">
                                    <AiOutlineFolder style={{ fontSize: "50px", marginBottom: "10px" }} />
                                    <span className="folder-name">
                                        {folder?.name}
                                    </span>
                                    <div>
                                        {folder?.description}
                                    </div>
                                </div>
                            </Col>
                            <Col lg={5}>
                            </Col>
                            <Col lg={3}>
                                <OverlayTrigger
                                    placement="bottom"
                                    overlay={
                                        <Tooltip id="folder-add-module">
                                            Thêm học phần
                                        </Tooltip>
                                    }
                                >
                                    <Button className="folder-actions">
                                        <AiOutlinePlusCircle />
                                    </Button>
                                </OverlayTrigger>
                                <OverlayTrigger
                                    placement="bottom"
                                    overlay={
                                        <Tooltip id="folder-share">
                                            Chia sẻ
                                        </Tooltip>
                                    }
                                >
                                    <Button className="folder-actions">
                                        <AiOutlineShareAlt />
                                    </Button>
                                </OverlayTrigger>
                                <OverlayTrigger
                                    placement="bottom"
                                    overlay={
                                        <Tooltip id="folder-update">
                                            Chỉnh sửa
                                        </Tooltip>
                                    }
                                >
                                    <Button
                                        className="folder-actions"
                                        onClick={() => setShowUpdateFolder(true)}
                                    >
                                        <AiOutlineSetting />
                                    </Button>
                                </OverlayTrigger>
                                <UpdateFolderForm
                                    folder={folder}
                                    showUpdateFolder={showUpdateFolder}
                                    hideUpdateFolderCreateFolder={hideUpdateFolderCreateFolder}
                                    user={user}
                                    addToast={addToast}
                                    updateFolder={updateFolder}
                                />
                                <OverlayTrigger
                                    placement="bottom"
                                    overlay={
                                        <Tooltip id="folder-delete">
                                            Xóa thư mục
                                        </Tooltip>
                                    }
                                >
                                    <Link to="/overview" className="link">
                                        <Button
                                            variant="outline-danger"
                                            className="folder-actions folder-delete"
                                            onClick={() => deleteFolderHandle(user.token, folder.id, addToast)}
                                        >
                                            <AiOutlineDelete />
                                        </Button>
                                    </Link>
                                </OverlayTrigger>
                            </Col>
                        </Row>
                    ) : null}
                </Col>
            </Row>
        </React.Fragment>
    )
}
const mapStateToProps = (state: any) => {
    return {
        user: state.user
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        deleteFolder: (token: string, folder_id: number,
            addToast: any) => dispatch(deleteFolder(token, folder_id, addToast)),
        updateFolder: (token: string, folder_id: number, input: UpdateFolderInput,
            addToast: any) => dispatch(updateFolder(token, folder_id, input, addToast))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(FolderDetail))
