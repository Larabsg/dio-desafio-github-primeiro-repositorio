import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

import banner from "../../assets/banner.png";

import { Container, TextContent, Title, TitleHighLight } from "./styles";

const Home = () => {
    return (
        <>
            <Header />
            <Container>
                <div>
                    <Title>
                        <TitleHighLight>
                            Implemente <br />
                        </TitleHighLight>
                        o seu futuro global agora!
                    </Title>
                    <TextContent>
                        Domine as tecnologias utilizadas pelas empresas mais
                        inovadoras do mundo e encare seu novo desafio
                        profissional, evoluindo em comunidade com os melhores
                        experts.
                    </TextContent>
                    <Button
                        title="Começar agora"
                        variant="secondary"
                        onClick={() => null}
                    />
                </div>
                <div>
                    <img src={banner} alt="Imagem Principal" />
                </div>
            </Container>
        </>
    );
};

export { Home };
