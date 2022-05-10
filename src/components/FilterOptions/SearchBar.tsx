import React from 'react';
import { Button, Form } from 'react-bootstrap';

const SearchBar = ({ keyword, setKeyword, handleClick }: any) => {
    return (
        <section className="pb-3">
            <div className="d-flex w-100">
                <Form.Control
                    onChange={(e) => setKeyword(e.target.value)}
                    className="d-inline-block"
                    type="text"
                    placeholder="Search by Rocket Name"
                    defaultValue={keyword}
                />
                <Button onClick={() => handleClick()} variant="dark">
                    <i className="fa-solid fa-magnifying-glass" />
                </Button>
            </div>
        </section>
    );
};

export default SearchBar;
