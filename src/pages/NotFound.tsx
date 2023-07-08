import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { ChevronRight } from 'react-bootstrap-icons'
import { LinkContainer } from 'react-router-bootstrap'
import ScrollToTop from '../components/ScrollToTop'
import { LangContext } from '../context/LangContext'

const NotFound: React.FC = () => {
  const [lang] = useContext(LangContext);
  return (
    <>
      <ScrollToTop />
      {/* Main part */}
      <div className="not-found">
        <Container className='d-flex justify-content-center align-items-center flex-column h-100'>
          <h2>404</h2>
          <h3 className='text-uppercase text-center'>{lang === "en" ? "OOPS! That page can't be found." : "OOPS! Həmin səhifəni tapmaq mümkün deyil."}</h3>
          <p className='text-center'>{lang === "en" ? "It looks like nothing was found at this location. You can either go back to the last page or go to homepage." : "Deyəsən bu məkanda heç nə tapılmayıb. Siz ya bir əvvəlki səhifəyə qayıda bilərsiniz, ya da əsas səhifəyə keçə bilərsiniz."}</p>
          <div className="error-btn">
            <LinkContainer to="/" className='btn-content d-flex justify-content-center align-items-center'>
              <span>{lang === "en" ? "Homepage" : "Ana Səhifə"} <ChevronRight className='ms-2' fontSize={10} /></span>
            </LinkContainer>
          </div>
        </Container>
      </div>
    </>
  )
}

export default NotFound