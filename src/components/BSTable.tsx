import styled from 'styled-components';
import { Table } from 'react-bootstrap';
import { parseDate } from '../utils/Date';

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
    
    const parseCommitMessage = ( message : string ) => {
        return message.length > 35 ? message.substring(0, 32) + "..." : message;
    }

    return(
        <TableContainer>
            <Table  bordered hover size="sm" style={{borderRadius: "20px !important"}}>
                <thead>
                    <TR>
                        <th>User</th>
                        <th>Commit</th>
                        <th>Date</th>
                    </TR>
                </thead>
                <tbody>
                    { commits.map( object => {
                        return(
                            <TR key={object.sha}>
                                <td>
                                    <Img src={object.author.avatar_url}/>
                                    <A href={object.author.html_url} target="_blank">{object.author.login}</A>
                                </td>
                                <td>
                                    <A href={object.html_url} target="_blank">{parseCommitMessage(object.commit.message)}</A>
                                </td>
                                <td>{parseDate(object.commit.author.date)}</td>
                            </TR>
                        )
                    } ) }
                </tbody>
            </Table>
        </TableContainer>
    )

}

export default BSTable;