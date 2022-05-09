import React from 'react';
import { Form } from 'react-bootstrap';

const FilterOptions = () => {
    return (
        <section>
            <div className="bg-white shadow-lg p-3">
                <Form>
                    <div className="pb-2">
                        <p className="text-secondary mb-1">Filter By Date:</p>
                        <Form.Group controlId="filterByDate">
                            <Form.Check type="checkbox" label="Last Date" />
                            <Form.Check type="checkbox" label="Last Week" />
                            <Form.Check type="checkbox" label="Last Year" />
                        </Form.Group>
                    </div>
                    <div className="py-2">
                        <p className="text-secondary mb-1">
                            Filter By Launch Status:
                        </p>
                        <Form.Group className="mb-3">
                            <Form.Select>
                                <option>Failure</option>
                                <option>Success</option>
                            </Form.Select>
                        </Form.Group>
                    </div>
                    <div className="py-2">
                        <Form.Group className="mb-3">
                            <Form.Check type="checkbox" label="Upcoming" />
                        </Form.Group>
                    </div>
                </Form>
            </div>
        </section>
    );
};

export default FilterOptions;
