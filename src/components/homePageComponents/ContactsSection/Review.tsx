import React from 'react'
import { IPost } from '../../../interfaces/contentInterfaces/posts/IPost';

interface IPropsReview {
    review: IPost
}


export const Review: React.FC<IPropsReview> = ({ review }) => {

    return (
        <li className="reviews__item">
        <p> { review.body } </p>
        <div className="reviews__client">
            <img src={review.img.path} alt="" className="reviews__client-img circle responsive-img" />
            <div className="reviews__client-info">
                <p>{review.title}</p>
                <span>Предприниматель</span>
            </div>
        </div>
    </li>


    )
}