import React, { useState, useEffect } from 'react'
import HeaderPage from '../components/layouts/Header'
import { Row, Col, Navbar, Card, Button, Container, Form, InputGroup, FormControl } from 'react-bootstrap';
import { FaHome, FaLeaf } from 'react-icons/fa';
import { SiGoogleclassroom } from 'react-icons/si';
import { AiOutlineProject, AiOutlineFolder } from 'react-icons/ai';
import { BsFiles } from 'react-icons/bs';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { me } from '../redux/actions/userAction';
import MainPage from '../components/layouts/MainPage';
import ListModule from '../components/ListModule';
import ListFolder from '../components/folder/ListFolder';
import VerticalNav from '../components/layouts/VerticalNav';
import ListClass from '../components/class/ListClass';
import { useHistory, useLocation, useParams } from 'react-router-dom';


const Search = () => {
    let { sr } = useParams<{ sr: any }>();
    console.log(sr);
    return (

        <React.Fragment>
            <Row>
                <Col md={12} >
                    <HeaderPage />

                </Col>
            </Row>
            <Row>
                <div>
                    <Form>
                        
                    </Form>

                </div>
            </Row>


        </React.Fragment>

    )
}

export default Search
