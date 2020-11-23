import React from 'react';
import { connect } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { deleteFolder } from '../../redux/actions/folderActions';

const ListFolder = ({folders, deleteFolder, user}: any) => {
    const { addToast } = useToasts();
    return (
        <React.Fragment>
            {folders && folders.list && folders.list.length > 0 ? (
                <h1>ABC</h1>
            ): null}
        </React.Fragment>
    )
}
const mapStateToProps = (state: any) => {
    return {
        folders: state.folders
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        deleteFolder: (token: string, folder_id: number, addToast: any) => dispatch(deleteFolder(token, folder_id, addToast))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(ListFolder));