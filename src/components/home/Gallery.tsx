import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

function Gallery() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div className="gallery py-5">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                <a href="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/gallery6.jpg">
                    <img alt="BookLover" src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/gallery6.jpg" />
                    <div className="plus-sign">
                        <span>+</span>
                    </div>
                </a>
                <a href="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/gallery5.jpg">
                    <img alt="BookLover" src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/gallery5.jpg" />
                    <div className="plus-sign">
                        <span>+</span>
                    </div>
                </a>
                <a href="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/gallery4.jpg">
                    <img alt="BookLover" src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/gallery4.jpg" />
                    <div className="plus-sign">
                        <span>+</span>
                    </div>
                </a>
                <a href="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/gallery3.jpg">
                    <img alt="BookLover" src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/gallery3.jpg" />
                    <div className="plus-sign">
                        <span>+</span>
                    </div>
                </a>
                <a href="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/gallery2.jpg">
                    <img alt="BookLover" src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/gallery2.jpg" />
                    <div className="plus-sign">
                        <span>+</span>
                    </div>
                </a>
                <a href="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/gallery1.jpg">
                    <img alt="BookLover" src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/gallery1.jpg" />
                    <div className="plus-sign">
                        <span>+</span>
                    </div>
                </a>
            </LightGallery>
        </div>
    );
}

export default Gallery;
