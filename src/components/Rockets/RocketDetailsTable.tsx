import React from 'react';
import { Col, Row } from 'react-bootstrap';

const RocketDetailsTable = ({ details }: any) => {
    return (
        <div className="mt-3">
            <Row>
                <Col className="border fw-bold p-2">Rocket ID:</Col>
                <Col className="border p-2 text-secondary">
                    {details?.rocket?.rocket_id}
                </Col>
            </Row>
            <Row>
                <Col className="border fw-bold p-2">Rocket Name:</Col>
                <Col className="border p-2 text-secondary">
                    {details?.rocket?.rocket_name}
                </Col>
            </Row>
            <Row>
                <Col className="border fw-bold p-2">Rocket Type:</Col>
                <Col className="border p-2 text-secondary">
                    {details?.rocket?.rocket_type}
                </Col>
            </Row>
            <Row>
                <Col className="border fw-bold p-2">First Stage:</Col>
                <Col className="border p-2">
                    <p className="m-0 text-secondary">
                        <span>Serial= </span>
                        <span>
                            {details?.rocket?.first_stage?.cores[0]
                                ?.core_serial ?? 'null'}
                        </span>
                    </p>
                    <p className="m-0 text-secondary">
                        <span>Flight= </span>
                        <span>
                            {details?.rocket?.first_stage?.cores[0]?.flight ??
                                'null'}
                        </span>
                    </p>
                    <p className="m-0 text-secondary">
                        <span>Block= </span>
                        <span>
                            {details?.rocket?.first_stage?.cores[0]?.block ??
                                'null'}
                        </span>
                    </p>
                    <p className="m-0 text-secondary">
                        <span>Gridfins= </span>
                        <span>
                            {details?.rocket?.first_stage?.cores[0]?.gridfins
                                ? 'true'
                                : 'false' ?? 'null'}
                        </span>
                    </p>
                    <p className="m-0 text-secondary">
                        <span>Legs= </span>
                        <span>
                            {details?.rocket?.first_stage?.cores[0]?.legs
                                ? 'true'
                                : 'false' ?? 'null'}
                        </span>
                    </p>
                    <p className="m-0 text-secondary">
                        <span>Land Success= </span>
                        <span>
                            {details?.rocket?.first_stage?.cores[0]?.legs ??
                                'null'}
                        </span>
                    </p>
                    <p className="m-0 text-secondary">
                        <span>Landing Intent= </span>
                        <span>
                            {details?.rocket?.first_stage?.cores[0]
                                ?.landing_intent
                                ? 'true'
                                : 'false' ?? 'null'}
                        </span>
                    </p>
                    <p className="m-0 text-secondary">
                        <span>Landing Type= </span>
                        <span>
                            {details?.rocket?.first_stage?.cores[0]
                                ?.landing_type ?? 'null'}
                        </span>
                    </p>
                    <p className="m-0 text-secondary">
                        <span>Landing Vehicle= </span>
                        <span>
                            {details?.rocket?.first_stage?.cores[0]
                                ?.landing_vehicle ?? 'null'}
                        </span>
                    </p>
                </Col>
            </Row>
            <Row>
                <Col className="border fw-bold p-2">Second Stage:</Col>
                <Col className="border p-2">
                    <p className="m-0 text-secondary">
                        <span>Block= </span>
                        <span>
                            {details?.rocket?.second_stage?.block ?? 'null'}
                        </span>
                    </p>
                    <p className="m-0 text-secondary">
                        <span>Payload ID= </span>
                        <span>
                            {details?.rocket?.second_stage?.payloads[0]
                                ?.payload_id ?? 'null'}
                        </span>
                    </p>
                    <p className="m-0 text-secondary">
                        <span>Payload Type= </span>
                        <span>
                            {details?.rocket?.second_stage?.payloads[0]
                                ?.payload_type ?? 'null'}
                        </span>
                    </p>
                    <p className="m-0 text-secondary">
                        <span>Nationality= </span>
                        <span>
                            {details?.rocket?.second_stage?.payloads[0]
                                ?.nationality ?? 'null'}
                        </span>
                    </p>
                    <p className="m-0 text-secondary">
                        <span>Manufacturer= </span>
                        <span>
                            {details?.rocket?.second_stage?.payloads[0]
                                ?.manufacturer ?? 'null'}
                        </span>
                    </p>
                    <p className="m-0 text-secondary">
                        <span>Orbit= </span>
                        <span>
                            {details?.rocket?.second_stage?.payloads[0]
                                ?.orbit ?? 'null'}
                        </span>
                    </p>
                    <p className="m-0 text-secondary">
                        <span>Reference System= </span>
                        <span>
                            {details?.rocket?.second_stage?.payloads[0]
                                ?.orbit_params?.reference_system ?? 'null'}
                        </span>
                    </p>
                    <p className="m-0 text-secondary">
                        <span>Regime= </span>
                        <span>
                            {details?.rocket?.second_stage?.payloads[0]
                                ?.orbit_params?.regime ?? 'null'}
                        </span>
                    </p>
                </Col>
            </Row>
            <Row>
                <Col className="border fw-bold p-2">Launch Site:</Col>
                <Col className="border p-2 text-secondary">
                    <p className="m-0 text-secondary">
                        <span>Site Id= </span>
                        <span>{details?.launch_site?.site_id ?? 'null'}</span>
                    </p>
                    <p className="m-0 text-secondary">
                        <span>Site Name= </span>
                        <span>{details?.launch_site?.site_name ?? 'null'}</span>
                    </p>
                    <p className="m-0 text-secondary">
                        <span>Site Name Long= </span>
                        <span>
                            {details?.launch_site?.site_name_long ?? 'null'}
                        </span>
                    </p>
                </Col>
            </Row>
            {!details?.launch_success && (
                <Row>
                    <Col className="border fw-bold p-2">
                        Launch Failure Details:
                    </Col>
                    <Col className="border p-2 text-secondary">
                        <p className="m-0 text-secondary">
                            <span>Time= </span>
                            <span>
                                {details?.launch_failure_details?.time ??
                                    'null'}
                            </span>
                        </p>
                        <p className="m-0 text-secondary">
                            <span>Altitude= </span>
                            <span>
                                {details?.launch_failure_details?.altitude ??
                                    'null'}
                            </span>
                        </p>
                        <p className="m-0 text-secondary">
                            <span>Reason= </span>
                            <span>
                                {details?.launch_failure_details?.reason ??
                                    'null'}
                            </span>
                        </p>
                    </Col>
                </Row>
            )}
        </div>
    );
};

export default RocketDetailsTable;
