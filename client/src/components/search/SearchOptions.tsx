import React from 'react';
import {Link} from 'react-router-dom';
import { AiOutlineSortAscending, AiOutlineFilter } from 'react-icons/ai';
import { Form } from 'react-bootstrap';
import { optionsSearch } from '../../helper/optionsSeacrh';

const SearchOptions = () => {
    const options = optionsSearch();
    console.log(options)
    return (
        <div>
            <ul className="vertical-nav">
                <li className="nav-home">

                    <Link to="/overview">
                        <AiOutlineFilter></AiOutlineFilter> Danh mục
                    </Link>
                    <ul className="vertical-nav-child">
                        {options.category.map((c: any, i: number) => (
                            <li key={i}>
                                <Form.Check
                                    type='radio'
                                    label={c.label}
                                    defaultChecked={i === 0 ? true : false}
                                    name='category'
                                    custom
                                    id={c.label}
                                />
                            </li>
                        ))}
                    </ul>
                </li>
                <li className="nav-home">

                    <Link to="/overview">
                        <AiOutlineSortAscending></AiOutlineSortAscending> Sắp xếp theo
                    </Link>
                    <ul className="vertical-nav-child">
                        {options.fields.map((c: any, i: number) => (
                            <li key={i}>
                                <Form.Check
                                    type='radio'
                                    label={c.label}
                                    defaultChecked={i === 0 ? true : false}
                                    name='sortBy'
                                    custom
                                    id={c.label}
                                />
                            </li>
                        ))}
                        <li>
                            <Form.Check
                                type="checkbox"
                                custom
                                name="sortType"
                                label={"Tăng dần"}
                                id={"Tăng dần"}
                                defaultChecked={true}
                            />
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default SearchOptions
