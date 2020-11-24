import Axios from 'axios';
import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { getQuerySearch } from '../helper/getQuerySearch';
import { FOLDER_DETAIL } from '../services/folder/folder.service';

const FolderDetail = ({user}: any) => {
    const [folder, setFolder] = useState();
    const query = getQuerySearch();
    const id = query.get('id');
    const code = query.get('code');
    const {addToast} = useToasts();
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
    return (
        <div>
            {JSON.stringify(folder)}
        </div>
    )
}
const mapStateToProps = (state: any) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps, null)(React.memo(FolderDetail))
