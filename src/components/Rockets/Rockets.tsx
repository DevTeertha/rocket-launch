import { Col, Row, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import RocketCard from './RocketCard';

const Rockets = () => {
    const launches = useSelector((state: any) => state.launches);
    return (
        <section className="py-5">
            {launches?.loading ? (
                <Spinner animation="border" />
            ) : (
                <Row xs={1} md={2} lg={4} className="g-4">
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
