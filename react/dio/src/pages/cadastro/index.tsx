import React from "react";
import { MdEmail, MdLock, MdAccountCircle } from "react-icons/md";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import { IFormData } from "./types";
import { useNavigate } from "react-router-dom";
import { Column, Container, LoginText, InfoText, SubtitleCadastro, Title, TitleCadastro, Wrapper } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
    .object({
        name: yup
        .string()
        .required("Campo obrigatório"),
        email: yup
            .string()
            .email("Email não é válido")
            .required("Campo obrigatório"),
        password: yup
            .string()
            .min(3, "No mínimo 3 caracteres")
            .required("Campo obrigatório"),
    })
    .required();

const Cadastro = () => {
    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate("/login")
    }
    const {
        control,
        formState: { errors },
    } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: "onChange",
    });


    return (
        <>
            <Header />
            <Container>
            <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as
                        principais tecnologias e entrar mais rápido nas empresas
                        mais desejadas.
                    </Title>
                </Column>
                <Wrapper>
                    <TitleCadastro>Comece agora grátis</TitleCadastro>
                    <SubtitleCadastro>
                        Crie sua conta e make the change._
                    </SubtitleCadastro>
                    <form>
                        <Input
                            errorMessage={errors?.name?.message}
                            name="name"
                            control={control}
                            placeholder="Nome completo"
                            leftIcon={<MdAccountCircle />}
                        />
                        <Input
                            errorMessage={errors?.email?.message}
                            name="email"
                            control={control}
                            placeholder="E-mail"
                            leftIcon={<MdEmail />}
                        />
                        <Input
                            errorMessage={errors?.password?.message}
                            name="password"
                            control={control}
                            placeholder="Senha"
                            type="password"
                            leftIcon={<MdLock />}
                        />
                        <Button
                            onClick={handleClickSignIn}
                            title="Cadastro minha conta"
                            variant="secondary"
                            type="submit"
                        />
                    </form>
                    {/* <Row> */}
                        <InfoText>Ao clicar em "Criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</InfoText>
                        <LoginText onClick={handleClickSignIn}>Já tenho conta. <a href="/#" onClick={handleClickSignIn}>Fazer Login</a></LoginText>
                    {/* </Row> */}
                </Wrapper>
            </Container>
        </>
    );
};

export default Cadastro;
