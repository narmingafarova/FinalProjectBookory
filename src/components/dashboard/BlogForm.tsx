import React, { useState } from 'react'
import { Button, Col, Form } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

const BlogForm = ({ onFormSubmit, editCard }: any) => {
    const [photo, setPhoto] = useState<string>(editCard ? editCard.photo : "");
    const [title, setTitle] = useState<string>(editCard ? editCard.title : "");
    const [desc, setDesc] = useState<string>(editCard ? editCard.desc : "");
    const [cat, setCat] = useState<string>(editCard ? editCard.cat : "");
    const [person, setPerson] = useState<string>(editCard ? editCard.person : "");
    const [date, setDate] = useState<string>(editCard ? editCard.date : "");

    const [emptyForm, setEmptyForm] = useState<string>("");

    const blogFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!photo || !title || !desc || !cat || !person || !date) {
            setEmptyForm("Please, fill the blanks!")
        } else {
            onFormSubmit({
                photo,
                title,
                desc,
                cat,
                person,
                date
            })
        }
    }

    return (
        <div className="d-flex align-items-center justify-content-center mt-3 mb-5">
            <Col md={6}>
                <p className='empty-form'>{emptyForm}</p>
                <Form onSubmit={blogFormSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label className='mb-1'>Image</Form.Label>
                        <Form.Control type="text" value={photo} placeholder="Enter image url" onChange={e => setPhoto(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className='mb-1'>Title</Form.Label>
                        <Form.Control type="text" value={title} placeholder="Enter title" onChange={e => setTitle(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className='mb-1'>Description</Form.Label>
                        <Form.Control type="text" value={desc} placeholder="Enter description" onChange={e => setDesc(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className='mb-1'>Category</Form.Label>
                        <Form.Control type="text" value={cat} placeholder="Enter category" onChange={e => setCat(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className='mb-1'>Person</Form.Label>
                        <Form.Control type="text" value={person} placeholder="Enter person" onChange={e => setPerson(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className='mb-1'>Date</Form.Label>
                        <Form.Control type="date" value={date} placeholder="Enter person" onChange={e => setDate(e.target.value)} />
                    </Form.Group>
                    <div className="blog-btns mb-2">
                        <LinkContainer to="/dashboard">
                            <Button className='add-btn me-2' variant='none'>Back</Button>
                        </LinkContainer>
                        <Button variant="none" type="submit" className='add-btn'>
                            {editCard ? "Save" : "Add"}
                        </Button>
                    </div>
                </Form>
            </Col>
        </div>
    )
}

export default BlogForm