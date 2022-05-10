// eslint no-lonely-if: "error"

import React, { useEffect, useState } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import FilterOptions from '../FilterOptions/FilterOptions';
import SearchBar from '../FilterOptions/SearchBar';
import RocketCard from './RocketCard';

const Rockets = () => {
    const launches = useSelector((state: any) => state.launches);
    const [all, setAll] = useState<boolean>(true);
    const [keyword, setKeyword] = useState<string>('');
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [isUpcoming, setIsUpcoming] = useState<boolean>(false);
    const [filtered, setFiltered] = useState(
        launches.launches.filter(
            (launch: any) => launch.launch_success === isSuccess,
        ),
    );
    const handleClick = () => {
        if (!keyword) return;
        const newFiltered = launches.launches.filter((launch: any) => {
            const query = keyword.toLowerCase();
            return launch.rocket.rocket_name.toLowerCase().indexOf(query) >= 0;
        });
        setAll(false);
        setFiltered(newFiltered);
    };
    useEffect(() => {
        if (isUpcoming) {
            const newFiltered = launches.launches.filter(
                (launch: any) => launch.upcoming === isUpcoming,
            );
            setFiltered(newFiltered);
        } else {
            const newFiltered = launches.launches.filter((launch: any) => {
                const query = keyword.toLowerCase();
                return (
                    launch.rocket.rocket_name.toLowerCase().indexOf(query) >=
                        0 && launch.launch_success === isSuccess
                );
            });
            setFiltered(newFiltered);
        }
    }, [keyword.length, isSuccess, isUpcoming]);
    return (
        <section className="py-5">
            {launches?.loading ? (
                <Spinner animation="border" />
            ) : (
                <Row>
                    <Col xs={12} md={3}>
                        <SearchBar
                            handleClick={handleClick}
                            keyword={keyword}
                            setKeyword={setKeyword}
                        />
                        <div style={{ top: '10px' }} className="sticky-top">
                            <FilterOptions
                                all={all}
                                setAll={setAll}
                                setIsUpcoming={setIsUpcoming}
                                setIsSuccess={setIsSuccess}
                            />
                        </div>
                    </Col>
                    <Col xs={12} md={9}>
                        <Row xs={1} md={2} lg={3} className="g-4">
                            {all ? (
                                launches.launches.map(
                                    (rocket: any, index: number) => (
                                        <Col key={index}>
                                            <RocketCard rocket={rocket} />
                                        </Col>
                                    ),
                                )
                            ) : filtered.length > 0 ? (
                                filtered.map((rocket: any, index: number) => (
                                    <Col key={index}>
                                        <RocketCard rocket={rocket} />
                                    </Col>
                                ))
                            ) : (
                                <h3>Not Found!</h3>
                            )}
                        </Row>
                    </Col>
                </Row>
            )}
        </section>
    );
};

export default Rockets;
