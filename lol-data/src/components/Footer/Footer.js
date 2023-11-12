import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaReact } from "react-icons/fa";
import "./Footer.css";

const Foooter = () => {
    return(
        <footer>
            <Container>
                <Row className="justify-content-center text-center" xs="auto" id="row">
                    <Col>
                        <FaReact size={120} />
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Foooter;