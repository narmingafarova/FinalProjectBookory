import React, { useContext, useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { LangContext } from '../../context/LangContext'
import { story_az, story_en } from '../../data/lang'

const Story: React.FC = () => {
    const [lang] = useContext(LangContext)
    const [story, setStory] = useState<any>([])

    useEffect(() => {
        const story = lang === "en" ? story_en : story_az;
        setStory(story)
    }, [lang])

    return (
        <div className="about-story py-5">
            <Container>
                <div className="init-about text-center">
                    <div className="init-logo mb-4">
                        <img src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/About_01_1.png" alt="about-logo" />
                    </div>
                    <h4 className='text-center'>{lang === "en" ? "We are the premier book retailing chain in the Southeastern United States with more than 260 Book stores in 32 states." : "Biz 32 ştatda 260-dan çox kitab mağazası ilə Cənub-Şərqi Amerika Birləşmiş Ştatlarının ilk kitab pərakəndə satış şəbəkəsiyik."}</h4>
                </div>
            </Container>
            <div className="our-story">
                <Container>
                    <div className="main-img">
                        <img src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/About_04.jpg" alt="about" />
                    </div>
                    <div className="story-cards-part">
                        <h3 className='text-center'>{lang === "en" ? "Our Story" : "Bizim hekayəmiz"}</h3>
                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-6">
                                <div className="story-card">
                                    <h5 className='text-uppercase'>{story[0]}</h5>
                                    <p className='mb-0'>Mauris tempus erat laoreet turpis lobortis, eu tincidunt erat fermentum. Aliquam non tincidunt urna. Integer tincidunt nec nisl vitae ullamcorper. Proin sed ultrices erat.</p>
                                </div>
                                <div className="story-card">
                                    <h5 className='text-uppercase'>{story[1]}</h5>
                                    <p className='mb-0'>Praesent varius ultrices massa at faucibus. Aenean dignissim, orci sed faucibus pharetra, dui mi dignissim tortor, sit amet condimentum mi ligula sit amet augue.</p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6">
                                <div className="story-card">
                                    <h5 className='text-uppercase'>{story[2]}</h5>
                                    <p className='main-card-p'>Pellentesque sodales augue eget ultricies ultricies. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur sagittis ultrices condimentum.</p>
                                    <p className='mb-0'>Aliquam non tincidunt urna. Integer tincidunt nec nisl vitae ullamcorper. Proin sed ultrices erat. Praesent varius ultrices massa at faucibus. Aenean dignissim, orci sed faucibus pharetra, dui mi dignissim tortor, sit amet condimentum mi ligula sit amet augue. Pellentesque vitae eros eget enim mollis placerat.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-images">
                        <div className="row">
                            <div className="col-6 col-sm-6 col-md-6">
                                <img src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/About_03.png" alt="about" />
                            </div>
                            <div className="col-6 col-sm-6 col-md-6">
                                <img src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/About_02.png" alt="about" />
                            </div>
                        </div>
                    </div>
                    <div className="quote-story">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-6">
                                <h5 className='text-capitalize'>“{story[3]}”</h5>
                                <p className='mb-0 text-uppercase'>{story[4]}</p>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6">
                                <p className='mb-4'>{story[5]}</p>
                                <p className='mb-0'>{story[6]}</p>
                            </div>
                        </div>
                    </div>
                    <div className="foot-img">
                        <img src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/About_01.png" alt="about" />
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Story