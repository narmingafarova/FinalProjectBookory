import React from 'react'
import { Container } from 'react-bootstrap'
import { ChevronRight } from 'react-bootstrap-icons'
import { LinkContainer } from 'react-router-bootstrap'
import ScrollToTop from '../components/ScrollToTop'

const NotFound: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      {/* Main part */}
      <div className="not-found">
        <Container className='d-flex justify-content-center align-items-center flex-column h-100'>
          <h2>404</h2>
          <h3 className='text-uppercase'>OOPS! That page can't be found.</h3>
          <p className='text-center'>It looks like nothing was found at this location. You can either go back to the last page or go to homepage.</p>
          <div className="error-btn">
            <LinkContainer to="/" className='btn-content d-flex justify-content-center align-items-center'>
              <span>Homepage <ChevronRight className='ms-2' fontSize={10} /></span>
            </LinkContainer>
          </div>
        </Container>
      </div>
    </>
  )
}

export default NotFound