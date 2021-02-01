import React from 'react';
import HeaderPage from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import TestData from "../components/layouts/TestData";

const Test = ({match}: any) => {
    return (
        <React.Fragment>
            <HeaderPage/>
            <TestData moduleId={match.params.id}/>
            <Footer/>
        </React.Fragment>

    )
}

export default Test
