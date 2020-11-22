import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { allModules } from '../../redux/actions/moduleAction';



const MainPage = ({ user, allModules, module, show }: any) => {

    const showModules = () => {
        allModules(user.token);
        show(true);
    }

    return (
        <div>
            <div className="main-page-header">
                <div className="profile-image">
                    <img src={require('../../assets/avatar.png')} alt="Avatar" className="avatar" />
                </div>
                <div className="info-part">
                    <div className="profile-name">
                        {user.user.username}
                    </div>
                    <div className="profile-button-container">
                        <button className="profile-button" onClick={() => showModules()}>Đã tạo</button>
                        <button className="profile-button">Đã học</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        user: state.user,
        module: state.module
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        allModules: (token: String) => dispatch(allModules(token))
    }
} 
export default connect(mapStateToProps,  mapDispatchToProps)(React.memo(MainPage));