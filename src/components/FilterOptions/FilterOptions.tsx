import React from 'react';
import { Form } from 'react-bootstrap';

const FilterOptions = ({ all, setAll, setIsSuccess, setIsUpcoming }: any) => {
    return (
        <section>
            <div className="bg-white shadow-lg p-3">
                <Form>
                    <div className="py-2">
                        <Form.Check
                            onChange={(e) => setAll(e.target.checked)}
                            checked={all}
                            type="checkbox"
                            label="All"
                        />
                    </div>
                    <div className="pb-2">
                        <p className="text-secondary mb-1">
                            Filter By Launch Date:
                        </p>
                        <Form.Group controlId="filterByDate">
                            <Form.Check
                                type="checkbox"
                                label="Last Week"
                                disabled={all}
                            />
                            <Form.Check
                                type="checkbox"
                                label="Last Month"
                                disabled={all}
                            />
                            <Form.Check
                                type="checkbox"
                                label="Last Year"
                                disabled={all}
                            />
                        </Form.Group>
                    </div>
                    <div className="py-2">
                        <p className="text-secondary mb-1">
                            Filter By Launch Status:
                        </p>
                        <Form.Group className="mb-3">
                            <Form.Select
                                disabled={all}
                                defaultValue=""
                                onChange={(e: any) =>
                                    setIsSuccess(e.target.value === 'true')
                                }
                            >
                                <option value="false">Failure</option>
                                <option value="true">Success</option>
                            </Form.Select>
                        </Form.Group>
                    </div>
                    <div className="py-2">
                        <Form.Group className="mb-3">
                            <Form.Check
                                onChange={(e: any) =>
                                    e.target.checked
                                        ? setIsUpcoming(true)
                                        : setIsUpcoming(false)
                                }
                                type="checkbox"
                                label="Upcoming"
                                disabled={all}
                            />
                        </Form.Group>
                    </div>
                </Form>
            </div>
        </section>
    );
};

export default FilterOptions;
