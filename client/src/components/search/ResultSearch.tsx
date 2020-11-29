import React from 'react'
import { Button, Card, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// type propsType = {
//     result: any
// }
const ResultSearch = ({
    result,
    categorySearch
}: any) => {
    return (
        <React.Fragment>
            {result == null || result.length < 1? (
                <h3>Không có kết quả phù hợp</h3>
            ): null}
            {categorySearch == 'module' && result.map((res: any, i: number) => (
                <Card className="result-item" key={i}>
                    <Link to="/overview" style={{ textDecoration: "none", color: "black" }}>
                        <Card.Body>
                            <Card.Title>
                                {res.name}
                            </Card.Title>
                            <Card.Text>
                                {res.terms} thuật ngữ
                            </Card.Text>
                        </Card.Body>
                        <Card.Text style={{ marginLeft: "20px" }}>
                            <Image thumbnail src={require('../../assets/avatar.png')} className="avatar-custom-result"></Image>
                        </Card.Text>
                        <Card.Text className="author-result-search">
                            {res?.username}
                        </Card.Text>
                    </Link>
                </Card>
            ))}
            {categorySearch == 'folder' && result.map((res: any, i: number) => (
                <Card className="result-item" key={i}>
                    <Link to={`/${res.username}/folder?code=${res.code}&id=${res.id}`} style={{ textDecoration: "none", color: "black" }}>
                        <Card.Body>
                            <Card.Title>
                                {res.name}
                            </Card.Title>
                            <Card.Text>
                                {res?.description}
                            </Card.Text>
                        </Card.Body>
                        <Card.Text style={{ marginLeft: "20px" }}>
                            <Image thumbnail src={require('../../assets/avatar.png')} className="avatar-custom-result"></Image>
                        </Card.Text>
                        <Card.Text className="author-result-search">
                            {res?.username}
                        </Card.Text>
                    </Link>
                </Card>
            ))}
            {categorySearch == 'class' && result.map((res: any, i: number) => (
                <Card className="result-item" key={i}>
                    <Link to={`/${res.username}/class?code=${res.code}&id=${res.id}`} style={{ textDecoration: "none", color: "black" }}>
                        <Card.Body>
                            <Card.Title>
                                {res.name}
                            </Card.Title>
                            <Card.Text>
                                {res?.description}
                            </Card.Text>
                        </Card.Body>
                        <Card.Text style={{ marginLeft: "20px" }}>
                            <Image thumbnail src={require('../../assets/avatar.png')} className="avatar-custom-result"></Image>
                        </Card.Text>
                        <Card.Text className="author-result-search">
                            {res?.username}
                        </Card.Text>
                    </Link>
                </Card>
            ))}
        </React.Fragment>
    )
}

export default ResultSearch
