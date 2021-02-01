import React, { useEffect, useContext, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { ModalAuth } from './ModalAuth'
import { ActionType } from '../context/reducer/types'
import { Loader } from './UI/loaders/Loader'
import photo from "../img/photo.png";
import { Navbar } from './headerComponents/Navbar'
import { ReducerContext } from '../context/reducer/reducerContext'
const Fade = require('react-reveal/Fade')

export const Header: React.FC = () => {
    const { dispatch, state } = useContext(ReducerContext)
    const history = useHistory()
    type localUrl = 'background1.jpg' | 'background2.jpg' | 'background3.jpg' | 'city.jpg' | ''
    let imgURL = ''


    useEffect(() => {
        let post = history.location.pathname.split('/')[1]
        switch (post) {
            case 'contacts':
                imgURL = 'background3.jpg'
                break;
            case 'posts':
                imgURL = 'background1.jpg'
                break;
            case 'post':
                imgURL = 'background2.jpg'
                break;
            case 'about':
                imgURL = 'background2.jpg'
                break;

            default:
                imgURL = 'city.jpg'
                break;
        }
        dispatch({
            type: ActionType.ChangeHeaderImg,
            payload: {
                headerImg: imgURL
            }
        })
        // console.log(state);

    }, [history.location])

    useEffect(() => {
        const options = {
            inDuration: 250,
            outDuration: 200,
            draggable: true
        };
        const M = window.M;
        var elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems, options);
        var elems1 = document.querySelectorAll('.parallax');
        M.Parallax.init(elems1, {});
    }, [])


    return (
        <div className="header-block">

            <Navbar />
            {/* <div className="section no-pad-bot">
                    <div className="container">
                        <h1 className="header center teal-text text-lighten-2">Богдановский Роман</h1>
                        <div className="row center">
                            <h5 className="header col s12 light">Личный сайт веб разработчика</h5>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="container">                
                        <div className="row center">
                            
                            <div className="col s6 light">
                                <div> <img src={photo} alt=""/></div>
                               
                                <p>Город: Москва, Брянск</p>
                            </div>
                            <div className="col s6 light">
                                <p>Привет, меня зовут </p>
                                <h1>Роман Богдановский</h1>
                                <p>Я занимаюсь разработкой современных сайтов и приложений. Мне нравится заниматься этим делом</p>
                            </div>
                        </div>
                    </div>
                </div> */}

            {/* <div className="parallax"><img src={state.headerImg && require(`../img/${state.headerImg}`)} alt="Unsplashed background img 1" /></div> */}


            <ModalAuth />

        </div>

    )
}

