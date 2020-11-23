import React from 'react';
import { deleteModule } from '../redux/actions/moduleAction';
import { connect } from 'react-redux';
import ModuleCard from './layouts/ModuleCard';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BiAddToQueue } from 'react-icons/bi';

const ListModule = ({ module, deleteModule, user }: any) => {
    return (
        <React.Fragment>
            { module && module.list.length > 0 ? (
                <Col md={12} className="course-part">
                    <div style={{ display: "flex", justifyContent: "flex-start" }}>
                        <div>
                            {
                                module.list.map((item: any) => {
                                    return (
                                        <React.Fragment key={item.id}>
                                            <ModuleCard
                                                deleteModule={deleteModule}
                                                module={item}
                                                user={user}
                                            ></ModuleCard>
                                        </React.Fragment>
                                    )
                                })
                            }
                        </div>
                        <Link to="/course" style={{ textDecoration: 'none' }}>
                            <button className="add-course" title="Thêm học phần">
                                <BiAddToQueue />
                            </button>
                        </Link>
                    </div>
                </Col>
            ) : (
                    <h3 className="no-modules-notification">
                        Bạn chưa tạo học phần nào
                        <br />
                        <Link to="/course" style={{ textDecoration: 'none' }}>

                            <button className="add-course" style={{ marginTop: "20px" }}>Tạo học phần </button>

                        </Link>
                    </h3>
                )}
        </React.Fragment>
    )
}
const mapStateToProps = (state: any) => {
    return {
        module: state.module
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        deleteModule: (token: string, addToast: any, id: any) => dispatch(deleteModule(token, addToast, id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(ListModule));