import React from 'react'
import { Container } from 'react-bootstrap'
import { connect, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import BlogForm from '../../components/dashboard/BlogForm'
import { editBlogFromDatabase } from '../../managers/action/blogAction'

const EditDashboard = ({ pvalue }: any) => {
    const dispatch: any = useDispatch()
    const navigate: any = useNavigate()
    return (
        <Container>
            <div className='add-dashboard'>
                <h1 className='text-center my-4'>Edit Blog</h1>
                <BlogForm editCard={pvalue} onFormSubmit={(item: any) => {
                    dispatch(editBlogFromDatabase(pvalue.id, item));
                    navigate('/dashboard');
                }} />
            </div>
        </Container>
    )
}

const mapStateToProps = (state: any) => {
    const link = window.location.pathname.slice(16);
    return {
        pvalue: state.find((p: any) => p.id === link),
    };
};

export default connect(mapStateToProps)(EditDashboard)