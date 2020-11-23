import React, { useContext } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useHttp } from '../../../hooks/http.hook';
import { PostList } from '../../postsPageComponents/PostList';
import { WorksSlider } from './WorksSlider';
import { ReducerContext } from '../../../context/reducer/reducerContext';

const Fade = require('react-reveal/Fade');


export const SomeWorksSection: React.FC = () => {
    const { loading } = useHttp()
    const { state } = useContext(ReducerContext)
    return (
        <div id="works" className="section__works section scrollspy" >
            <div className="container">
                <div className="works__wrap wrap">
                    {/* <div className="works__circle rellax" data-rellax-speed="-2"></div> */}
                    {/* <Fade bottom> */}
                        <div className="works__titles">
                            <h3>За некоторое время сделано <span> более такого числа</span> заказов</h3>
                            <p>Вот несколько примеров работ:</p>
                        </div>
                         {/* {loading && <Loader />} */}
                         
                        {!loading && state.posts && <WorksSlider works={state.posts.filter((work) => (work.inMainPage === true))} />}
                        <div className="custom-nav owl-nav"></div>
                    {/* </Fade> */}
                </div>
            </div>
        </div>
    )
}
