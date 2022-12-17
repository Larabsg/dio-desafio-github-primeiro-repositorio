import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import logo from "../../assets/logo.png";
import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper,
} from "./styles";
import { IHeader } from "./types";

const Header = ({ autenticado }: IHeader) => {
    const navigate = useNavigate()

    const handleClickSignUp = () => {
        navigate("/cadastro")
    }

    const handleClickHome = () => {
        navigate("/")
    }
    
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Logo da DIO" />
                    {autenticado ? (
                        <>
                            <BuscarInputContainer>
                                <Input placeholder="Buscar..." />
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    ) : null}
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src="https://avatars.githubusercontent.com/u/69206910?v=4" />
                    ) : (
                        <>
                            <MenuRight href="#" onClick={handleClickHome}>Home</MenuRight>
                            <Button title="Entrar" />
                            <Button onClick={handleClickSignUp} title="Cadastrar" />
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    );
};

export { Header };
