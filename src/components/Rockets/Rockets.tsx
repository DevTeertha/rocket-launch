import React, { useEffect } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getLaunches } from '../../redux/reducers/launchesReducer';
import RocketCard from './RocketCard';

const Rockets = () => {
    const dispatch = useDispatch();
    const launches = useSelector((state: any) => state.launches);
    console.log('launches: ', launches);
    useEffect(() => {
        dispatch(getLaunches());
    }, []);
    return (
        <section className="py-5">
            {launches?.loading ? (
                <Spinner animation="border" />
            ) : (
                <Row xs={1} md={2} lg={4} className="g-2">
                    {launches.launches.map((rocket: any, index: number) => (
                        <Col key={index}>
                            <RocketCard rocket={rocket} />
                        </Col>
                    ))}
                </Row>
            )}
        </section>
    );
};

export default Rockets;
