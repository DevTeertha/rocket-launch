import { Badge, Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RocketCard = ({ rocket }: any) => {
    return (
        <Link to={`/${rocket?.flight_number}`}>
            <Card className="mb-2 h-100">
                <Card.Header className="position-relative p-4">
                    {rocket?.upcoming && (
                        <Badge
                            className="position-absolute top-0 start-50 translate-middle fs-6"
                            bg="warning"
                        >
                            Upcoming
                        </Badge>
                    )}
                    <Image
                        className="w-100"
                        src={rocket?.links?.mission_patch_small}
                    />
                </Card.Header>
                <Card.Body>
                    <div className="d-flex justify-content-between">
                        <p className="fs-6 text-decoration-none text-secondary fw-bold m-0">
                            {' '}
                            {rocket?.rocket?.rocket_name}{' '}
                        </p>
                        {rocket.launch_success ? (
                            <p className="fw-bold text-end m-0">
                                <Badge bg="success">Success</Badge>
                            </p>
                        ) : (
                            <p className="fw-bold text-end m-0">
                                <Badge bg="danger">Failed</Badge>
                            </p>
                        )}
                    </div>
                    <Card.Title className="text-decoration-none fs-4 py-2 m-0">
                        {' '}
                        {rocket?.mission_name}{' '}
                    </Card.Title>
                    <Card.Text className="text-nowrap text-truncate text-secondary text-decoration-none">
                        {rocket?.details}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    );
};

export default RocketCard;
