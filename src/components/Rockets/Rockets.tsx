import { Col, Row, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import FilterOptions from '../FilterOptions/FilterOptions';
import SearchBar from '../FilterOptions/SearchBar';
import RocketCard from './RocketCard';

const Rockets = () => {
    const launches = useSelector((state: any) => state.launches);
    return (
        <section className="py-5">
            {launches?.loading ? (
                <Spinner animation="border" />
            ) : (
                <Row>
                    <Col xs={12} md={3}>
                        <SearchBar />
                        <div style={{ top: '10px' }} className="sticky-top">
                            <FilterOptions />
                        </div>
                    </Col>
                    <Col xs={12} md={9}>
                        <Row xs={1} md={2} lg={3} className="g-4">
                            {launches.launches.map(
                                (rocket: any, index: number) => (
                                    <Col key={index}>
                                        <RocketCard rocket={rocket} />
                                    </Col>
                                ),
                            )}
                        </Row>
                    </Col>
                </Row>
            )}
        </section>
    );
};

export default Rockets;
