import React, { useState } from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import Modal from 'react-modal';
import { FaTimes } from 'react-icons/fa';
import './ChampionSkins.css';

const ChampionSkins = ({ skins, championId }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedSkin, setSelectedSkin] = useState(null);

    function handleClick(number) {
        setModalIsOpen(true);
        setSelectedSkin(number);
    }

    function handleCloseModal() {
        setModalIsOpen(false);
    }

    return (
        <div>
            <Container className="container">
                {skins.map((skin) => (
                    <Card key={skin.id} className="card">
                        <Card.Img
                            variant="top"
                            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championId}_${skin.num}.jpg`}
                            alt={skin.name}
                            className="card-img"
                        />
                        <Card.Body>
                            <Button onClick={() => handleClick(skin.num)} className="button">
                                <p>{skin.name}</p>
                            </Button>
                        </Card.Body>
                    </Card>
                ))}
            </Container>

            {modalIsOpen && (
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={handleCloseModal}
                    contentLabel="Skin Modal"
                    style={{
                        content: {
                            width: '60%',
                            height: '60%',
                            margin: 'auto',
                            background: 'none',
                            border: 'none',
                        },
                    }}
                >
                    <div className="modal-image"
                        style={{
                            backgroundImage: `url("https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championId}_${selectedSkin}.jpg")`,
                        }}
                    >
                        <Button
                            onClick={handleCloseModal}
                            className="modal-button"
                        >
                            <FaTimes style={{ fontSize: '24px', color: 'white' }} />
                        </Button>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default ChampionSkins;
