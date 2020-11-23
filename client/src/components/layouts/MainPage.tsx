import React from 'react';

const MainPage = ({ user, setTabIndex, tabIndex }: any) => {

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
                        <button style={tabIndex === 1 ? {background: '#15449b', color: 'white'} : {}} className="profile-button" onClick={() => setTabIndex(1)}>Học phần</button>
                        <button style={tabIndex === 2 ? {background: '#15449b', color: 'white'} : {}} className="profile-button" onClick={() => setTabIndex(2)}>Thư mục</button>
                        <button className="profile-button">Đã học</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default React.memo(MainPage);