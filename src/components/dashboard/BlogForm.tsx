import React, { useContext, useState } from 'react'
import { Button, Col, Form } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import { LangContext } from '../../context/LangContext';

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

    const [lang] = useContext(LangContext)

    return (
        <div className="d-flex align-items-center justify-content-center mt-3 mb-5">
            <Col md={6}>
                <p className='empty-form'>{emptyForm}</p>
                <Form onSubmit={blogFormSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label className='mb-1'>{lang === "en" ? "Image" : "Şəkil"}</Form.Label>
                        <Form.Control type="text" value={photo} placeholder={lang === "en" ? "Enter image url" : "Şəkil (url) daxil et"} onChange={e => setPhoto(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className='mb-1'>{lang === "en" ? "Title" : "Başlıq"}</Form.Label>
                        <Form.Control type="text" value={title} placeholder={lang === "en" ? "Enter title" : "Başlıq daxil et"} onChange={e => setTitle(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className='mb-1'>{lang === "en" ? "Description" : "Təsvir"}</Form.Label>
                        <Form.Control type="text" value={desc} placeholder={lang === "en" ? "Enter description" : "Təsvir daxil et"} onChange={e => setDesc(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className='mb-1'>{lang === "en" ? "Category" : "Kateqoriya"}</Form.Label>
                        <Form.Control type="text" value={cat} placeholder={lang === "en" ? "Enter category" : "Kateqoriya daxil et"} onChange={e => setCat(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className='mb-1'>{lang === "en" ? "Person" : "Şəxs"}</Form.Label>
                        <Form.Control type="text" value={person} placeholder={lang === "en" ? "Enter person" : "Şəxsi daxil et"} onChange={e => setPerson(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className='mb-1'>{lang === "en" ? "Date" : "Tarix"}</Form.Label>
                        <Form.Control type="date" value={date} placeholder={lang === "en" ? "Enter date" : "Tarixi daxil et"} onChange={e => setDate(e.target.value)} />
                    </Form.Group>
                    <div className="blog-btns mb-2">
                        <LinkContainer to="/dashboard">
                            <Button className='add-btn me-2' variant='none'>{lang === "en" ? "Back" : "Geri"}</Button>
                        </LinkContainer>
                        <Button variant="none" type="submit" className='add-btn'>
                            {editCard && lang === "en" ? "Save" : editCard && lang === "az" ? "Yadda Saxla" : lang === "en" ? "Add" : "Əlavə et"}
                        </Button>
                    </div>
                </Form>
            </Col>
        </div>
    )
}

export default BlogForm