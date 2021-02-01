import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { Button, Row, Spinner } from "react-bootstrap";
import { allTest, checkResult } from "../../redux/actions/testActions";
import { useToasts } from "react-toast-notifications";
import ScorePopup from "./ScorePopup";
import { getQuestionInModule } from '../../redux/actions/testActions';

const TestData = ({ allTest, user, checkAnswer, test, moduleId }: any) => {
    const quizData = [
        {
            id: "1",
            question: "What is the most used programming language in 2019?",
            answer: [{ answer: "Java" }, { answer: "C" }, { answer: "Python" }, { answer: "JavaScript" }],
        }, {
            id: "1",
            question: "Who is the President of US?",
            answer: [{ answer: "Florin Pop" }, { answer: "Donald Trump" }, { answer: "Ivan Saldano" }, { answer: "Mihai Andrei" }],
        }, {
            id: "1",
            question: "What does HTML stand for?",
            answer: [{ answer: "Hypertext Markup Language" }, { answer: "Cascading Style Sheet" }, { answer: "Jason Object Notation" }, { answer: "Helicopters Terminals Motorboats Lamborginis" }],
        }, {
            id: "1",
            question: "What year was JavaScript launched?",
            answer: [{ answer: "1996" }, { answer: "1995" }, { answer: "1994" }, { answer: "none of the above" }],
        }
    ];

    let { id } = useParams<{ id: any }>();

    const [loading, setLoading] = useState(true)

    const { addToast } = useToasts()

    // useEffect(() => {
    //     setLoading(true)
    //     allTest(user.token, id, () => {
    //         setLoading(false)
    //     })

    // }, [])

    const [questionIndex, setQuestionIndex] = useState(0)
    const [data, setData] = useState(quizData);
    const [popup, setPopup] = useState(false);
    const [playerAnswer, setPlayerAnswer] = useState({
        id: "",
        answer: "",
    })
    const [dataPost, setDataPost] = useState<{ id: string; answer: string; }[]>([]);


    const handleSubmit = () => {
        const data = {
            sets: [...dataPost, playerAnswer],
        };

        checkAnswer(user.token, addToast, data, () => setPopup(true));


    }

    const handleClose = () => {
        setPopup(false)
    }

    const handleNextQuestion = () => {
        setQuestionIndex(questionIndex + 1);
        setDataPost([...dataPost, playerAnswer])
        console.log(dataPost)
        // document.getElementsByClassName("check-result").reset()
    }

    const handleChange = (e: any) => {
        console.log(e.target.id, e.target.value);
        setPlayerAnswer({
            ...playerAnswer,
            id: e.target.id,
            answer: e.target.value
        })
    }
    const [listQuestions, setListQuestion]: any = useState([]);
    useEffect(() => {
        getQuestionInModule(user.token, moduleId)
            .then(res => {
                if (res !== null) {
                    setListQuestion(res)
                }
                setLoading(false)
            })
            .catch(e => {
                console.log(e)
                setLoading(false)
            })
    }, [])
    return (
        <>
            {loading == true ? (
                <Row style={{ marginTop: "100px", marginBottom: "100px" }} className="d-flex justify-content-center">
                    <Spinner animation="grow" variant="success" />
                    <Spinner animation="grow" variant="danger" />
                    <Spinner animation="grow" variant="warning" />
                </Row>
            ) : (
                    <div className="test-container">
                        <div className="quiz-container" id="quiz">
                            <h3 style={{textAlign:"center", marginTop: "10px"}}>
                                {questionIndex+1 + ' / ' + listQuestions.length}
                            </h3>
                            <h3 style={{textAlign:"center", marginTop: "10px"}}>
                                question score: {listQuestions[questionIndex].score}
                            </h3>
                            <div className="quiz-header">
                                <h2>{listQuestions[questionIndex]?.question}</h2>
                                <ul>
                                    {listQuestions[questionIndex].answer.map((a: any, i: number) => (
                                        <li key={i}>

                                            <input
                                                type="radio"
                                                value={a.item}
                                                name="answer"
                                                className="answer check-result"
                                                id={listQuestions[questionIndex].id}
                                                onChange={handleChange}
                                            />
                                            <label>{a.item}</label>

                                        </li>
                                    ))}
                                </ul>
                                {
                                    listQuestions.length > 0 && questionIndex < listQuestions.length - 1 ?
                                    (
                                        <Button style={{background: "#4257b2"}} type="submit" onClick={handleNextQuestion} size="lg" block>Tiếp</Button>
                                    )
                                    : (
                                        <Button style={{background: "#4257b2"}} type="submit" onClick={handleSubmit} size="lg" block>Kết thúc</Button>
                                    )
                                }
                            </div>

                        </div>
                    </div>
                )
            }
            <ScorePopup showPopup={popup} closePopup={handleClose} score={test.score} />

        </>
    )

}

const mapStateToProps = (state: any) => {
    // console.log('mapStateToProps', state)
    return {
        user: state.user,
        test: state.test,
    }
}
const mapDispatchToProps = (dispatch: any) => {

    return {
        allTest: (token: String, moduleId: any, setLoading?: any) => dispatch(allTest(token, moduleId, setLoading)),
        checkAnswer: (token: String, addToast: any, data: object, setPopup?: any) => dispatch(checkResult(token, addToast, data, setPopup))

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(TestData));
