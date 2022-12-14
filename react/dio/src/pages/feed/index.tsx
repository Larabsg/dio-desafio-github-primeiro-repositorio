import { Header } from "../../components/Header";
import { UserInfo } from "../../components/UserInfo";

import { Container, Column, Title, TitleHighLight } from "./styles";
import { Card } from "../../components/Card";

const Feed = () => {
    return (
        <>
            <Header autenticado={true}/>
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Column>
                <Column flex={1}>
                    <TitleHighLight># RANKING 5 TOP DA SEMANA</TitleHighLight>
                    <UserInfo
                        percentual={70}
                        name="Lara Beatriz"
                        image="https://avatars.githubusercontent.com/u/69206910?v=4"
                    />
                    <UserInfo
                        percentual={80}
                        name="Lara Beatriz"
                        image="https://avatars.githubusercontent.com/u/69206910?v=4"
                    />
                    <UserInfo
                        percentual={26}
                        name="Lara Beatriz"
                        image="https://avatars.githubusercontent.com/u/69206910?v=4"
                    />
                    <UserInfo
                        percentual={49}
                        name="Lara Beatriz"
                        image="https://avatars.githubusercontent.com/u/69206910?v=4"
                    />
                    <UserInfo
                        percentual={10}
                        name="Lara Beatriz"
                        image="https://avatars.githubusercontent.com/u/69206910?v=4"
                    />
                </Column>
            </Container>
        </>
    );
};

export { Feed };
