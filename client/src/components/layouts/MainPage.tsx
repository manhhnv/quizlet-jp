import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';


const MainPage = ({ user }: any) => {
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
                        <button className="profile-button">Đã tạo</button>
                        <button className="profile-button">Đã học</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        user: state.user
    }
}
// const mapDispatchToProps = (dispatch: any) => {
//     return {
//         logout: (token: String) => dispatch(logout(token))
//     }
// } 
export default connect(mapStateToProps,  null)(React.memo(MainPage));