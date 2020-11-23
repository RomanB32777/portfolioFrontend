import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const Fade = require('react-reveal/Fade');

const optionsAdventagers = {
    loop: true,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
}

export const AboutMeSection: React.FC = () => {

    return (
        <div id="aboutMe" className="section__about section scrollspy" style={{height: '100vh'}}>
            <div className="container">
                <div className="about__infome wrap">
                    <div className="row">
                        <div className="col m3 s12">
                            {/* <img src={require('../img/luzer-photo.png')} alt="" /> */}
                        </div>
                        <div className="col m9 s12">
                            {/* <Fade bottom> */}
                                <div className="about__infome-titles">
                                    <p>Привет, меня зовут</p>
                                    <h2>Роман Богдановский</h2>
                                </div>

                                <div className="row">
                                    <div className="about__infome-luzer_photo col s12">
                                        <img src={require('../../img/luzer-photo.png')} alt="" />
                                        <div className="about__infome-text col s12">
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                                            <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.  sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem</p>
                                        </div>

                                    </div>
                                </div>
                            {/* </Fade> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}