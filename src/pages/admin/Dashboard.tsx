import React from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { removeBlogFromDatabase } from '../../managers/action/blogAction'
import { PencilSquare, X } from 'react-bootstrap-icons'

const Dashboard = () => {
    const blogData: any = useSelector((blog: any) => blog)
    const dispatch: any = useDispatch()
    return (
        <Container className='my-5 dashboard'>
            <h1 className='text-center'>Dashboard</h1>
            <LinkContainer to="/dashboard/add">
                <Button className='mb-2 add-btn' variant='none'>+ Add</Button>
            </LinkContainer>
            <Table bordered>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Photo</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Person</th>
                        <th>Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {blogData.map((item: any, i: any) => {
                        return <tr key={i}>
                            <td>{i + 1}</td>
                            <td>
                                <img src={item.photo} alt="blog" width={60} />
                            </td>
                            <td>{item.title}</td>
                            <td>{item.desc}</td>
                            <td>{item.cat}</td>
                            <td>{item.person}</td>
                            <td>{item.date}</td>
                            <td className='text-center'>
                                <LinkContainer to={`/dashboard/edit/${item.id}`}>
                                    <Button className='edit-btn me-2' variant='warning'><PencilSquare /></Button>
                                </LinkContainer>
                                <Button className='rmv-btn' variant='danger' onClick={() => { dispatch(removeBlogFromDatabase(item.id)); window.location.reload(); }}><X fontSize={16} /></Button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </Table>
        </Container>
    )
}

export default Dashboard