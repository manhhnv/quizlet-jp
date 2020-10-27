import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {
    FaFacebook,
    FaInstagram,
} from 'react-icons/fa';
import {
    AiOutlineTwitter
} from 'react-icons/ai';

function Footer() {
    const [size, setSize] = useState(window.innerWidth);
    const [flexBasis, setFlexBasis] = useState([20, 20, 20, 20 ,20]);
    const checkSize = () => {
        setSize(window.innerWidth);
    }


    useEffect(() => {
        console.log(size);
        if (size <= 768){
            setFlexBasis([50 ,50 ,50 ,50 ,100]);
        }
        if (size > 768 && size <= 992){
            setFlexBasis([33.3, 33.3, 33.3, 50, 50]);
        }
        if(size > 992 && size < 1200){
            // setFlexGrown([1,1,1,1,0])
            setFlexBasis([25, 25, 25, 25, 100]);
        }
        if(size > 1200){
            setFlexBasis([20, 20, 20, 20 ,20]);
        }
        
        window.addEventListener('resize', checkSize);
        return () => {
            window.removeEventListener('resize', checkSize);
        }
        

    }, [size]);

    return (
        <>
            <div className="footer-container">
                <div className="footer-child">
                    <div className="footer-top">
                        <div className="footer-column" style={{flex: `0 0 ${flexBasis[0]}%`}}>
                            <h6>Chủ đề</h6>
                            <Link to='/'>Khoa học</Link>
                            <Link to='/'>Khoa học xã hội</Link>
                            <Link to='/'>Khác</Link>
                            <Link to='/'>Nghệ thuật và nhân văn</Link>
                            <Link to='/'>Ngôn ngữ</Link>
                            <Link to='/'>Toán học</Link>
                        </div>
                        <div className="footer-column" style={{flex: `0 0 ${flexBasis[1]}%`}}>
                            <h6>Tính năng</h6>
                            <Link to='/'>Quizlet Live</Link>
                            <Link to='/'>Chế độ Học</Link>
                            <Link to='/'>Sơ đồ</Link>
                            <Link to='/'>Thẻ ghi nhớ</Link>
                            <Link to='/'>Ứng dụng</Link>
                        </div>
                        <div className="footer-column" style={{flex: `0 0 ${flexBasis[2]}%`}}>
                            <h6>Hỗ trợ</h6>
                            <Link to='/'>Đăng ký</Link>
                            <Link to='/'>Trung tâm Hỗ trợ</Link>
                            <Link to='/'>Quy tắc danh dự</Link>
                            <Link to='/'>Nguyên tắc cộng đồng</Link>
                            <Link to='/'>Học sinh</Link>
                            <Link to='/'>Giáo viên</Link>
                        </div>
                        <div className="footer-column" style={{flex: `0 0 ${flexBasis[3]}%`}}>
                            <h6>Giới thiệu</h6>
                            <Link to='/'>Công ty</Link>
                            <Link to='/'>Blog</Link>
                            <Link to='/'>Báo chí</Link>
                            <Link to='/'>Tuyển dụng</Link>
                            <Link to='/'>Quảng cáo</Link>
                            <Link to='/'>Quyền riêng tư</Link>
                            <Link to='/'>Terms of Service</Link>
                            <Link to='/'>Chính sách quảng cáo và cookie</Link>
                            <Link to='/'>Điều khoản dịch vụ</Link>

                        </div>
                        <div className="footer-column" style={{flex: `0 0 ${flexBasis[4]}%`}}>
                            <h6>Ngôn ngữ</h6>
                            <select>
                                <option value="vietnamese">Tiếng Việt</option>
                                <option value="english">Tiếng Anh</option>
                            </select>
                        </div>
                    </div>
                    <hr />
                    <div className="footer-bottom">
                        <div className="left">
                            <AiOutlineTwitter className="iccon" />
                            <FaFacebook className="iccon" />
                            <FaInstagram className="iccon" />
                        </div>
                        <div className="right">
                            © 2020 Quizlet Inc.
                    </div>

                    </div>
                </div>


            </div>
        </>
    )
}

export default Footer
