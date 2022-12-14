import React from "react";
import { FiThumbsUp } from "react-icons/fi";

import {
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture,
} from "./styles";

const Card = () => {
    return (
        <CardContainer>
            <ImageBackground src="https://cdn.pixabay.com/photo/2016/06/17/06/04/background-1462755_960_720.jpg" />
            <Content>
                <UserInfo>
                    <UserPicture src="https://avatars.githubusercontent.com/u/69206910?v=4" />
                    <div>
                        <h4>Lara Beatriz</h4>
                        <p>Há 10 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso do Orange Tech +</h4>
                    <p>
                        Projeto feito no bootcamp DIO do Orange Tech +...
                        <strong>Saiba mais</strong>
                    </p>
                </PostInfo>
                <HasInfo>
                    <h4>#JavaScript #React #CSS</h4>
                    <p>
                        <FiThumbsUp /> 10
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    );
};

export { Card };
