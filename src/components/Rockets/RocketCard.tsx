import { Card, Image } from 'react-bootstrap';

const RocketCard = ({ rocket }: any) => {
    console.log('rocket: ', rocket.links.mission_patch_small);
    return (
        <Card className="mb-2">
            <Card.Header>
                <Image
                    className="w-100"
                    src={rocket?.links?.mission_patch_small}
                />
            </Card.Header>
            <Card.Body>
                <Card.Title> Card Title </Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card &apos; s content.
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default RocketCard;
