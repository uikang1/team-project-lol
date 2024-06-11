import { useState } from 'react';
import gamevideoData from '../../assets/api/GameVideo';

import {
    MapSections,
    PlayDetails,
    PlayModes,
    StyledLink,
    MapContainer,
    MapContent,
    Video,
    Ul,
    Inner,
    Li,
} from '../../pages/main/mainpageStyle';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MapSection = () => {
    const [currentVideo, setCurrentVideo] = useState(gamevideoData[0]);

    const handleLiClick = (video) => {
        setCurrentVideo(video);
    };

    const { authed } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const onGo = () => {
        if (!authed) {
            navigate('/join');
        } else {
            window.open('https://download.kr.riotgames.com/league');
        }
    };

    return (
        <MapSections>
            <Inner>
                <MapContainer>
                    <MapContent>
                        <h2>
                            다양하게
                            <br /> <b>플레이</b>
                        </h2>
                        <div>
                            <StyledLink onClick={onGo}>지금 플레이하기</StyledLink>
                        </div>
                        <PlayModes>
                            <Ul>
                                {gamevideoData.map((video, index) => (
                                    <Li key={index} onClick={() => handleLiClick(video)}>
                                        <p>
                                            <img
                                                src={`./images/content/main/playimg${
                                                    index + 1
                                                }.jpg`}
                                                alt="playmodes"
                                            />
                                        </p>

                                        <strong>{video.name}</strong>
                                    </Li>
                                ))}
                            </Ul>
                        </PlayModes>
                    </MapContent>

                    <PlayDetails>
                        <Video>
                            <video
                                src={currentVideo.video}
                                alt=""
                                muted
                                autoPlay
                                controlsList="nodownload"
                            />
                        </Video>
                        <h3>{currentVideo.title}</h3>
                        <p>{currentVideo.text}</p>
                    </PlayDetails>
                </MapContainer>
            </Inner>
        </MapSections>
    );
};

export default MapSection;
