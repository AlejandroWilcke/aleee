import styled from 'styled-components';
import { Table } from 'react-bootstrap';

const TableContainer = styled.div`
    width: 100%;
`

const Img = styled.img`
    width: 30px;
    border-radius: 70%;
    padding-right: 10px;
`

const TR = styled.tr`
    color: white;
    background-color: rgba(20, 20, 20, 0.5);
    :nth-child(2n) {
        background-color: rgba(50, 50, 50, 0.5);
    }
`

const A = styled.a`
    color: white;
    &:hover{
        color: white;
    }
`

const BSTable = ( { commits } ) => {
    return(
        <TableContainer>
            <Table responsive bordered hover size="sm">
                <thead>
                    <TR>
                        <th>User</th>
                        <th>Commit</th>
                        <th>Date</th>
                    </TR>
                </thead>
                <tbody>
                    { commits.slice(0).reverse().map( object => {
                        return(
                            <TR key={object.sha}>
                                <td>
                                    <Img src={object.author.avatar_url}/>
                                    <A href={object.author.html_url} target="_blank">{object.author.login}</A>
                                </td>
                                <td>
                                    <A href={object.html_url} target="_blank">{object.commit.message.substring(0, 30)}</A>
                                </td>
                                <td>{object.commit.author.date}</td>
                            </TR>
                        )
                    } ) }
                </tbody>
            </Table>
        </TableContainer>
    )

}

export default BSTable;