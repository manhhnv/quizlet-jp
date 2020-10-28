import React from 'react'

const HeroSection = () => {
    console.log(window.innerWidth);
    return (
        <div className="hero-container">
            <div className="hero-child-child">
                <div className="hero-child">
                    <div className="hero-text">
                        <h2>Bạn chỉ cần động não, còn mọi thứ khác đã có chúng tôi lo.</h2>
                        <p>Từ các thẻ ghi nhớ giúp bạn học tiếng Anh,
                        đến các trò chơi giúp học lịch sử dễ dàng,
                         bạn có thể sử dụng nhiều loại công cụ để chinh phục mọi thử thách.</p>
                    </div>
                    <div className="hero-image">
                        <img src="https://images.prismic.io/quizlet-prod/f566f00a-c722-47f4-8d0e-cfe6dfea372e_bannecker-benefit1.png?auto=compress,format"
                            alt="hero-iamge" />
                    </div>
                </div>

                <div className="hero-child">
                    <div className="hero-image">
                        <img src="https://images.prismic.io/quizlet-prod/96d962d7-4cac-4b5d-9442-478054f61473_bannecker-benefit2.png?auto=compress,format"
                            alt="hero-iamge" />
                    </div>
                    <div className="hero-text">
                        <h2>Thành công tiếp theo của bạn đang ở rất gần rồi.</h2>
                        <p>Mỗi kiến thức mới bạn học là một thành tích.
                        Quizlet chia nhỏ các chủ đề và môn học để
                         bạn tiến bộ từng ngày.</p>
                    </div>
                </div>

                <div className="hero-child">
                    <div className="hero-text">
                        <h2>Đừng nản lòng. Cùng nỗ lực nào.</h2>
                        <p>Khi một bài học nhỏ nhất cũng mang lại cảm giác chiến thắng,
                             bạn sẽ có thêm động lực tiếp bước.</p>
                    </div>
                    <div className="hero-image">
                        <img src="https://images.prismic.io/quizlet-prod/63a034d5-9f01-4024-a6bf-e36996575fd1_bannecker-benefit3.png?auto=compress,format"
                            alt="hero-iamge" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HeroSection;
