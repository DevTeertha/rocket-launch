import React from 'react';
import {
    Badge,
    Breadcrumb,
    Col,
    Container,
    Image,
    Row,
    Spinner,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import MyNavbar from '../Home/Navbar/MyNavbar';
import RocketDetailsTable from './RocketDetailsTable';

const RocketDetails = () => {
    const { id } = useParams();
    const launches = useSelector((state: any) => state.launches);
    const details = launches.launches.find(
        (launch: any) => launch.flight_number === Number(id),
    );
    return (
        <div>
            <MyNavbar />
            {launches.loading ? (
                <Container>
                    <Spinner animation="border" />
                </Container>
            ) : (
                <section className="py-3">
                    <Container>
                        <Breadcrumb>
                            <Breadcrumb.Item>
                                <Link to="/">Home</Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active>{id}</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="py-3">
                            <Row className="justify-content-md-center">
                                <Col xs={12} lg={3} className="py-3">
                                    <div
                                        style={{ top: '20px' }}
                                        className="shadow-lg sticky-top p-4"
                                    >
                                        {details?.launch_success ? (
                                            <p className="position-absolute top-0 start-50 translate-middle fs-6">
                                                <Badge bg="success">
                                                    Success
                                                </Badge>
                                            </p>
                                        ) : (
                                            <p className="position-absolute top-0 start-50 translate-middle fs-6">
                                                <Badge bg="danger">
                                                    Failed
                                                </Badge>
                                            </p>
                                        )}
                                        <Image
                                            className="w-100"
                                            src={
                                                details?.links
                                                    ?.mission_patch_small
                                            }
                                            alt={
                                                details?.links
                                                    ?.mission_patch_small
                                            }
                                        />
                                    </div>
                                </Col>
                                <Col xs={12} lg={9} className="py-3">
                                    <div className="px-4 py-0">
                                        <h2 className="fs-2">
                                            {details?.mission_name}
                                        </h2>
                                        <p className="fs-6">
                                            {details?.details}
                                        </p>
                                        <p className="m-0 text-secondary">
                                            <span className="fs-6">
                                                Launch Date:{' '}
                                            </span>
                                            <span>
                                                {' '}
                                                {new Date(
                                                    details?.launch_date_utc,
                                                ).toUTCString()}
                                            </span>
                                        </p>
                                        <div className="py-3 d-flex">
                                            <div className="pe-2">
                                                <a
                                                    className="text-decoration-underline"
                                                    rel="noreferrer"
                                                    target="_blank"
                                                    href={
                                                        details?.links
                                                            .article_link
                                                    }
                                                >
                                                    Read Article
                                                </a>
                                            </div>
                                            <div className="px-2">
                                                <a
                                                    className="text-decoration-underline"
                                                    rel="noreferrer"
                                                    target="_blank"
                                                    href={
                                                        details?.links.wikipedia
                                                    }
                                                >
                                                    Wikipedia
                                                </a>
                                            </div>
                                            <div className="px-2">
                                                <a
                                                    className="text-decoration-underline"
                                                    rel="noreferrer"
                                                    target="_blank"
                                                    href={
                                                        details?.links
                                                            .video_link
                                                    }
                                                >
                                                    Youtube
                                                </a>
                                            </div>
                                        </div>
                                        <div className="py-3 mt-2">
                                            <h3 className="m-0">Details</h3>
                                            <div>
                                                <RocketDetailsTable
                                                    details={details}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </section>
            )}
        </div>
    );
};

export default RocketDetails;
