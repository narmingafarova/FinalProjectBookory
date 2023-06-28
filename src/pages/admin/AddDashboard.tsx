import React from 'react'
import BlogForm from '../../components/dashboard/BlogForm'
import { Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addBlogToDatabase } from '../../managers/action/blogAction'
import { useNavigate } from 'react-router-dom'

const AddDashboard: React.FC = () => {
    const dispatch: any = useDispatch()
    const navigate: any = useNavigate()
    return (
        <Container>
            <div className='add-dashboard'>
                <h1 className='text-center my-4'>Add Blog</h1>
                <BlogForm onFormSubmit={(item: any) => {
                    dispatch(addBlogToDatabase(item));
                    navigate('/dashboard');
                }} />
            </div>
        </Container>
    )
}

export default AddDashboard