import React, { useState } from 'react';
import { IoCloseSharp, IoPlay } from 'react-icons/io5';
import {
    Image,
    Item,
    Text,
    Title,
    Modal,
    ModalContent,
    CloseButton,
    IFrame,
    ImageContainer,
    PlayButton,
} from '../../pages/esports/esportstyle';

const EsportItem = ({ items }) => {
    const { imgurl, title, month, text, youtubeurl } = items;
    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    return (
        <>
            <Item onClick={toggleModal}>
                <ImageContainer>
                    <Image src={imgurl} alt={title} />
                    <PlayButton onClick={toggleModal}>
                        <IoPlay />
                    </PlayButton>
                </ImageContainer>
                <b>E스포츠</b>
                <Text>{month}</Text>
                <Title>{title}</Title>
                <Text>{text}</Text>
            </Item>
            {modalOpen && (
                <Modal>
                    <ModalContent>
                        <CloseButton onClick={toggleModal}>
                            <IoCloseSharp />
                        </CloseButton>
                        <IFrame width="1200" height="800" src={youtubeurl}></IFrame>
                    </ModalContent>
                </Modal>
            )}
        </>
    );
};

export default EsportItem;
