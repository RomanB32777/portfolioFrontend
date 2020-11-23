import React, { useContext, useState, useEffect, useCallback } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
//import Slider from "react-slick";
import { Review } from './Review';
import { IPost } from '../../../interfaces/contentInterfaces/posts/IPost';
const Rellax = require('rellax');

const optionsReviews = {
    loop: true,
    margin: 10,
    items: 1,
    nav: true,
    navText: [
        '',
        ''
    ],
    navContainer: '.reviews__navigation',
    responsive: {
        0: {
            items: 1
        },
        720: {
            items: 2
        }
    }
}

interface IPropsReviews {
    reviews: Array<IPost>
}

export const ReviewsSlider: React.FC<IPropsReviews> = ({ reviews }) => {

    useEffect(() => {
        var rellax = new Rellax('.rellax');
    }, [])

    if (!reviews.length) {
        return <p className="center">Отзывов пока нет</p>
    }

    return (
        <>
                <OwlCarousel {...optionsReviews}>
                    {
                        reviews.map((review, index) => {
                            return (
                                <Review review={review} key={index} />
                            )
                        })
                    }
                </OwlCarousel>
        </>
    )
}