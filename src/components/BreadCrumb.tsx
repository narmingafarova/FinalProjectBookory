import React, { useContext } from 'react'
import { Breadcrumb, Container } from 'react-bootstrap'
import { LangContext } from '../context/LangContext'

interface BreadCrumbType {
    page: string,
}

const BreadCrumb:React.FC<BreadCrumbType> = ({page}) => {
    const [lang] = useContext(LangContext)
    return (
        <div className="breadcrumb-bg">
            <Container className='d-flex justify-content-between align-items-center'>
                <h2 className='text-capitalize'>{page}</h2>
                <Breadcrumb>
                    <Breadcrumb.Item href="/" className='text-uppercase'>{lang === "en" ? "Home" : "Ana Səhifə"}</Breadcrumb.Item>
                    <Breadcrumb.Item active className='text-uppercase'>{page}</Breadcrumb.Item>
                </Breadcrumb>
            </Container>
        </div>
    )
}

export default BreadCrumb