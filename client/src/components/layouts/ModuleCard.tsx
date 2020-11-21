import React from 'react';
import { Row, Col, Navbar, Card, Button, Container } from 'react-bootstrap';

const ModuleCard = ({ name, description, create_at, author }: any) => {
    return (
        <Card  className="card-container">
            <Card.Header style={{backgroundColor: "white"}}>{create_at}</Card.Header>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted" style={{backgroundColor: "white", display: "flex", justifyContent: "flex-end"}}>create by: {author}</Card.Footer>
        </Card>
    )
}

export default ModuleCard
