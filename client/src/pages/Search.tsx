import React, { useEffect, useState } from 'react'
import { Col, Row, Pagination, Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import HeaderPage from '../components/layouts/Header';
import ResultSearch from '../components/search/ResultSearch';
import SearchOptions from '../components/search/SearchOptions';
import { getQuerySearch } from '../helper/getQuerySearch';
import { 
    searchModule, searchFolder, searchClass
} from '../redux/actions/searchAction';
import { QuerySearchInput, ENABLE_FIELD_SEARCH, ENABLE_SORT_TYPE } from '../types';

const Search = ({
    location,
    user
}: any) => {
    const [res, setRes]: any = useState(null);
    const [categorySearch, setCategorySearch]: any = useState('module');
    const changeCategorySearch = (c: any) => {
        setCategorySearch(c)
    }
    useEffect(() => {
        const querySearch = getQuerySearch();
        const query: QuerySearchInput = {
            name: `${querySearch.get('name')}`,
            sortBy: ENABLE_FIELD_SEARCH.NAME,
            sortType: ENABLE_SORT_TYPE.ASC
        }
        switch(categorySearch) {
            case 'module':
                searchModule(user.token, query)
                .then(response => {
                    setRes(response)
                })
                .catch(e => {
                    console.log(e)
                })
                break;
            case 'folder':
                searchFolder(user.token, query)
                .then(response => {
                    setRes(response)
                })
                .catch(e => {
                    console.log(e)
                })
                break;
            case 'class':
                searchClass(user.token, query)
                .then(response => {
                    setRes(response)
                })
                .catch(e => {
                    console.log(e)
                })
            default:
                // searchModule(user.token, query)
                // .then(response => {
                //     setRes(response)
                // })
                // .catch(e => {
                //     console.log(e)
                // })
                break;
        }
        // if (categorySearch === '' || categorySearch === 'module') {
        //     searchModule(user.token, query)
        //         .then(response => {
        //             setRes(response)
        //         })
        //         .catch(e => {
        //             console.log(e)
        //         })
        // }
    }, [location, categorySearch])
    return (
        <React.Fragment>
            <Row>
                <Col md={12}>
                    <HeaderPage />
                </Col>
            </Row>
            <Row>
                <Col md={3} className="vertical-nav-container">
                    <SearchOptions
                        categorySearch={categorySearch}
                        changeCategorySearch={changeCategorySearch}
                    />
                </Col>
                <Col md={1}></Col>
                <Col md={5} style={{ paddingBottom: "200px" }}>
                    {res ? (
                        <ResultSearch
                            result={res}
                            categorySearch={categorySearch}
                        />
                    ) : (
                            <Row style={{ marginTop: "100px" }} className="d-flex justify-content-center">
                                <Spinner animation="border" variant="primary"></Spinner>
                            </Row>
                        )}
                </Col>
                <Col md={3}></Col>
            </Row>
        </React.Fragment>
    )
}

const mapStateToProps = (state: any) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps, null)(Search)
