import React, { useState } from 'react';
import { AiFillGolden, AiFillFolderOpen, AiFillHome, AiFillCarryOut } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import AddFolderForm from '../folder/AddFolderForm';
import { createFolder } from '../../redux/actions/folderActions';
import { CreateFolderInput } from '../../types';
import { connect } from 'react-redux';
import { useToasts } from 'react-toast-notifications';

const VerticalNav = ({createFolder, folders, user }: any) => {
    const [showCreateFolder, setShowCreateFolder] = useState(false);
    const hideCreateFolderCreateFolder = () => {
        setShowCreateFolder(false);
    }
    const {addToast} = useToasts();
    return (
        <div>
            <ul className="vertical-nav">
                <li className="nav-home">
                    
                        <Link to="/overview" className="active">
                            
                            <AiFillHome></AiFillHome> Trang chủ
                            
                        </Link>
                    
                </li>
                <hr />
                <li>
                    <a href="#news">
                        <AiFillCarryOut></AiFillCarryOut> Học phần
                    </a>
                </li>
                <li>
                    <a href="#contact">
                        <AiFillFolderOpen></AiFillFolderOpen> Thư mục ( {folders.totalFolders} )
                    </a>
                    <ul className="vertical-nav-child">
                        {folders && folders.list.length > 0 ? folders.list.map((folder: any, index: any) => (
                            <li key={index}>
                                <a href={`folder?code=${folder.code}&id=${folder.id}`}>
                                    {folder.name}
                                </a>
                            </li>
                        )): null}
                        <li>
                            <a
                                style={{ color: "#3ccfcf" }}
                                onClick={() => setShowCreateFolder(true)}
                            >
                                Thêm thư mục
                            </a>
                            <AddFolderForm
                                showCreateFolder={showCreateFolder}
                                hideCreateFolderCreateFolder={hideCreateFolderCreateFolder}
                                createFolder={createFolder}
                                addToast={addToast}
                                user={user}
                            />
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#about">
                        <AiFillGolden></AiFillGolden> Lớp học
                    </a></li>
            </ul>
        </div>
    )
}
const mapStateToProps = (state: any) => {
    return {
        user: state.user,
        folders: state.folders
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        createFolder: (token: string, input: CreateFolderInput,
            addToast: any)=> dispatch(createFolder(token, input, addToast))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(VerticalNav));