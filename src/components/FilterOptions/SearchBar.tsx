import React from 'react';
import { Button, Form } from 'react-bootstrap';

const SearchBar = () => {
    return (
        <section className="pb-3">
            <div className="d-flex w-100">
                <Form.Control
                    className="d-inline-block"
                    type="text"
                    placeholder="Search by Rocket Name"
                />
                <Button variant="dark">
                    <i className="fa-solid fa-magnifying-glass" />
                </Button>
            </div>
        </section>
    );
};

export default SearchBar;
