import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { getUserCommits } from '../utils/GitHub';
import BSTable from './BSTable';
import { Form, Button } from 'react-bootstrap';

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`

const ContentWrapper = styled.div`
    margin: auto;
    background-color: rgba(200, 200, 200, 0.1);
    border: 3px solid rgba(200, 200, 200, 0.85);
    border-radius: 10px;
    padding: 30px 30px 30px 30px;
`

const Text = styled.span`
    color: white;
    font-size: 100%;
    width: 25%;
    padding-right: 70px;
`

const Main = () => {

    const [githubOwner, setGithubOwner] = useState("AlejandroWilcke")
    const [githubRepo, setGithubRepo] = useState("aleee");
    const [githubCommits, setGithubCommits] = useState([]);
    const [ownerSearchValue, setOwnerSearchValue] = useState("");
    const [repoSearchValue, setRepoSearchValue] = useState("");

    useEffect(() => {
        ( async () => setGithubCommits( await getUserCommits(githubOwner, githubRepo) ) )()
    }, []);

    const getRepositoryInfo = async () => {
        setGithubCommits( await getUserCommits(ownerSearchValue, repoSearchValue) )
        setGithubOwner(ownerSearchValue);
        setGithubRepo(repoSearchValue);
    }

    return(
        <Container>
            <ContentWrapper>
                <Text>Owner: {githubOwner}</Text>
                <Text>Repository: {githubRepo}</Text>
                <Form.Control 
                    size="sm" 
                    type="text" 
                    placeholder="Owner" 
                    value={ownerSearchValue}
                    onChange={ e => setOwnerSearchValue(e.target.value)}
                    style={{width: "15%", display:"inline-block", margin: "0px 15px 15px 0px"}} 
                />
                <Form.Control 
                    size="sm" 
                    type="text" 
                    placeholder="Repository"
                    value={repoSearchValue}
                    onChange={ e => setRepoSearchValue(e.target.value)}
                    style={{width: "15%", display:"inline-block", margin: "0px 15px 15px 0px"}} 
                />
                <Button variant="dark" onClick={ () => getRepositoryInfo() }>Search</Button>
                <BSTable commits={githubCommits}/>
            </ContentWrapper>
        </Container>
    )
}

export default Main;