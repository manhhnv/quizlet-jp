import React from 'react';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';

const Quotes = () => {
    return (
        <div className="quotes-container">
            <div className="quotes-container-child">
                
                <p><ImQuotesLeft className="quote-icon"/>
                    Trước đây, khi nói đến việc học, tôi dở vô cùng. 
                    Bây giờ tôi đang ở một trường đại học mới và họ giới thiệu tôi với Quizlet. 
                    Tôi không còn căng thẳng mỗi khi học và làm bài tập nữa. CẢM ƠN QUIZLET!!!
                    <ImQuotesRight className="quote-icon"/>
                </p>
                
            </div>
            
        </div>
    )
}

export default Quotes
