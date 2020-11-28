import React, { useContext, useState } from 'react';
import { AiFillGolden, AiFillFolderOpen, AiFillHome, AiFillCarryOut } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import AddFolderForm from '../folder/AddFolderForm';
import { createFolder } from '../../redux/actions/folderActions';
import { CreateFolderInput, CreateClassInput } from '../../types';
import { createClass } from "../../redux/actions/classActions";
import { connect } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import AddClassForm from '../class/AddClassForm';
import { ControlContext } from '../../hooks/ControlContext';

const VerticalNav = ({
    createFolder,
    folders,
    user,
    classes,
    createClass
}: any) => {
    const [showCreateFolder, setShowCreateFolder] = useState(false);
    const hideCreateFolderCreateFolder = () => {
        setShowCreateFolder(false);
    }
    const [showCreateClass, setShowCreateClass] = useState(false);
    const hideCreateClass = () => {
        setShowCreateClass(false);
    }
    const { addToast } = useToasts();
    const {tabIndex, setTabIndex} = useContext(ControlContext);
    // console.log(a)
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
                    <Link to="/overview#sets" onClick={() => setTabIndex(2)} className={tabIndex == 2 ? "active" : ''}>
                        <AiFillCarryOut></AiFillCarryOut> Học phần
                    </Link>
                </li>
                <li>
                    <Link to="/overview#folders" onClick={() => setTabIndex(3)} className={tabIndex == 3 ? "active" : ''}>
                        <AiFillFolderOpen></AiFillFolderOpen> Thư mục ( {folders.totalFolders} )
                    </Link>
                    <ul className="vertical-nav-child">
                        {folders && folders.list.length > 0 ? folders.list.map((folder: any, index: any) => (
                            <li key={index}>

                                <a href={`/${user?.user?.username}/folder?code=${folder.code}&id=${folder.id}`}>
                                    {folder.name}
                                </a>
                            </li>
                        )) : null}
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
                    <Link to="/overview#class" onClick={() => setTabIndex(4)} className={tabIndex == 4 ? "active" : ''}>
                        <AiFillGolden></AiFillGolden> Lớp học ( {classes.totalClasses} )
                    </Link>
                    <ul className="vertical-nav-child">
                        {classes && classes.list.length > 0 ? classes.list.map((item: any, index: any) => (
                            <li key={index}>
                                <a href={`/${user?.user?.username}/class?code=${item.code}&id=${item.id}`}>
                                    {item.name}
                                </a>
                            </li>
                        )) : null}
                        <li>
                            <a
                                style={{ color: "#3ccfcf" }}
                                onClick={() => setShowCreateClass(true)}
                            >
                                Thêm lớp học mới
                            </a>
                            <AddClassForm
                                showCreateClass={showCreateClass}
                                hideCreateClass={hideCreateClass}
                                user={user}
                                addToast={addToast}
                                createClass={createClass}
                            />
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}
const mapStateToProps = (state: any) => {
    return {
        user: state.user,
        folders: state.folders,
        classes: state.classes
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        createFolder: (token: string, input: CreateFolderInput,
            addToast: any) => dispatch(createFolder(token, input, addToast)),
        createClass: (token: string, input: CreateClassInput,
            addToast: any) => dispatch(createClass(token, input, addToast))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(VerticalNav));