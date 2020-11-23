import React, { useContext } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FormConnectMe } from './formConnectMe';
import { ReviewsSlider } from './ReviewsSlider';
import { ReducerContext } from '../../../context/reducer/reducerContext';
const Fade = require('react-reveal/Fade');

export const ContactsSection: React.FC = () => {
    const { state } = useContext(ReducerContext)
    return (
        <div id="contacts" className="section__wrapper section scrollspy" >
            <div className="after-before">
                <div className="container">
                    {/* <Fade bottom> */}
                    <div className="reviews__wrap wrap">
                        <div className="row rewiews__title-nav">
                            <div className="col s12 l6" style={{ paddingLeft: 0 }}>
                                <h3 className="reviews__title">
                                    Что обо мне говорят
                            </h3>
                            </div>
                            <div className="col s12 l6">
                                <div className="reviews__navigation">
                                </div>
                            </div>
                        </div>

                        <ul className="reviews__list reviews ">
                            {
                                state.posts && <ReviewsSlider reviews={state.posts.filter((rew) => (rew.type === 'review'))} />
                            }
                        </ul>
                    </div>

                    <div className="contacts-form__wrapper wrap row">

                        <div className="contacts__wrap wrap col s12 l6 m6">
                            <h3 className="contacts__title">
                                Контакты
                        </h3>
                            <p className="contacts__about">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita quisquam sequi, dolor assumenda? At possimus a qui excepturi perferendis laborum quod.</p>
                            <ul className="contacts__list contacts">
                                <li className="contacts__item gps">
                                    <img src={require('../../../img/icons8-gps.png')} alt="" />
                                    <p>Москва, Россия</p>
                                </li>
                                <li className="contacts__item telephone">
                                    <img src={require('../../../img/telephone.png')} alt="" />
                                    <p>8-962-140-50-40</p>
                                </li>
                                <li className="contacts__item email">
                                    <img src={require('../../../img/email.png')} alt="" />
                                    <p>e228ea@gmail.com</p>
                                </li>
                            </ul>
                        </div>
                        <FormConnectMe />
                    </div>
                    {/* </Fade> */}
                </div>
            </div>
        </div>
    )
}