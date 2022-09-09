import GitHubLogo from '../Assets/Logos/github.svg.png'
import { Container } from './styles';

import Input from '../Components/Input';
import ItemRepo from '../Components/ItemRepo';
import Button from '../Components/Button';
import { useState } from 'react';
import { api } from '../Services/api';


function App() {
  const [currentRepo, setCurrentRepo] = useState('')
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const {data} = await api.get(`repos/${currentRepo}`)

    if (data.id) {

      const isExist = repos.find(repo => repo.id === data.id)

      if(!isExist){
        setRepos(prev => [...prev, data]);
      setCurrentRepo('')
      return
      } 
      alert('Repositório já adicionado')    
    } 
  }

  const handleRemoveRepo = (id) => {
    const newRepos = repos.filter(repo => repo.id !== id)
    setRepos(newRepos)
    
  }

  return (
    <Container>
      <img src={GitHubLogo} width={72} height={72} alt="github logo"/>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
      <Button onClick={handleSearchRepo} />
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo} />)}
      
    </Container>
  );
}

export default App;
