import logo from "../assets/github-mark-white.png";
import Input from "../components/Input";
import Button from "../components/Button";
import ItemRepo from "../components/ItemRepo";
import { Container } from "./styles";
import { useState } from "react";
import { api } from "../services/api";

function App() {
    const [repos, setRepos] = useState([]);
    const [currentRepo, setCurrentRepo] = useState([]);

    const handleSearchRepo = async () => {
        const { data } = await api.get(`repos/${currentRepo}`).catch(()=>alert("Repositório não encontrado"));
        if (data.id) {
            const isExist = repos.find((repo) => repo.id === data.id);
            if (!isExist) {
                setRepos((prev) => [...prev, data]);
                setCurrentRepo("");
                return;
            } else {
              alert("Repositório já encontrado!")
            }
        }
    }

    const handleRemoveRepo = (id) => {
      console.log('Removendo', id)
      const items = repos.filter(e => e.id !== id)
      setRepos(items)
    }

    return (
        <Container>
            <img src={logo} width={72} height={72} alt="github logo" />
            <Input
                value={currentRepo}
                onChange={(e) => setCurrentRepo(e.target.value)}
            />
            <Button onClick={handleSearchRepo} />
            {repos.map((repo) => (
                <ItemRepo key={repo.id} handleRemoveRepo={handleRemoveRepo} repo={repo} />
            ))}
        </Container>
    );
}

export default App;
