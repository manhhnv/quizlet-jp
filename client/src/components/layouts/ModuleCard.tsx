import React from 'react';
import { Row, Col, Navbar, Card, Button, Container } from 'react-bootstrap';
import { AiOutlineDelete } from 'react-icons/ai';

const ModuleCard = ({ name, description, create_at, author }: any) => {
    return (
        <Card  className="card-container">
            <Card.Header style={{backgroundColor: "white", display: "flex", justifyContent:"space-between"}}>
                {create_at}
                <AiOutlineDelete style={{fontSize:"2rem", cursor: "pointer"}}/>
                </Card.Header>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button variant="primary" className="start-learn">Bắt đầu học</Button>
            </Card.Body>
            
            <Card.Footer className="text-muted" style={{backgroundColor: "white", display: "flex", justifyContent: "flex-end"}}>create by: {author}</Card.Footer>
        </Card>
    )
}

export default ModuleCard
