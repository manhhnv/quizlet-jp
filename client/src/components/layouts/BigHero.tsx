import React from 'react'

const BigHero = () => {
    return (
        <div className="bighero-container">
            <div className="bighero-child-left">
                <div className="bighero-child-left-child">
                    <div className="text">
                    <h1>Trở thành phiên bản xuất sắc nhất của chính bạn</h1>
                    </div>
                    <div className="quotes">
                        <p>Nắm vững mọi môn học, từng bước một</p>
                    </div>
                    <div className="button-start">
                        Bắt đầu học
                    </div>
                    <div className="role">
                        <div>
                            Tôi là giáo viên
                        </div>
                        <div>
                            Tôi là phụ huynh
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="bighero-child-right">
                <div className="right-img">
                    <img src="https://images.prismic.io/quizlet-prod/658f7592-1f7c-4d27-9b39-f79cdba06267_Carousel_Illo_Bannecker_02.png?auto=compress,format"
                        alt="bighero-img" />
                </div>
                
                <div className="right-quotes">
                    <div className="right-quotes-top">QUIZLET DÀNH CHO CÁC ĐỐI TƯỢNG HỌC SINH SAU</div>
                    <div>
                        Những học sinh tự nhủ "Đêm nay, mình sẽ làm xong bài tập để cuối tuần có thể đi chơi."
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BigHero
