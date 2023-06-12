import React from 'react'
import { Breadcrumb, Container } from 'react-bootstrap'

interface BreadCrumbType {
    page: string,
    page2: string
}

const BreadCrumb:React.FC<BreadCrumbType> = ({page, page2}) => {
    return (
        <div className="breadcrumb-bg">
            <Container className='d-flex justify-content-between align-items-center'>
                <h2 className='text-capitalize'>{page}</h2>
                <Breadcrumb>
                    <Breadcrumb.Item href="/" className='text-uppercase'>Home</Breadcrumb.Item>
                    {page2 ? <Breadcrumb.Item href="/" className='text-uppercase'>{page2}</Breadcrumb.Item> : ""}
                    <Breadcrumb.Item active className='text-uppercase'>{page}</Breadcrumb.Item>
                </Breadcrumb>
            </Container>
        </div>
    )
}

export default BreadCrumb