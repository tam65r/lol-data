import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiIntellijidea } from "react-icons/si";
import { IoLogoNpm } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
    const iconSize = 40;
    return (
        <footer>
            <Container>
                <Row className="justify-content-md-center">
                    <Col>
                        <FaReact size={iconSize} />
                        <IoLogoJavascript size={iconSize} />
                        <FaGithub size={iconSize} />
                        <SiIntellijidea size={iconSize} />
                        <IoLogoNpm size={iconSize} />
                        <FaCss3Alt size={iconSize} />
                        <FaHtml5 size={iconSize} />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className="justify-content-md-center" id="trace-row" />
            </Container>
            <Container>
                <Row >
                    <Col >
                        <h5>API</h5>
                    </Col>
                    <Col>
                        All league of legends data is obtained through{" "}
                        <a href="https://developer.riotgames.com/docs/lol#data-dragon" style={{ color: "white" }}>
                            Data Dragon API
                        </a>
                        .
                    </Col>
                </Row>
            </Container>

        </footer>
    );
};

export default Footer;
