import React, { useEffect, useCallback, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useHttp } from '../hooks/http.hook'
import { Loader } from '../components/UI/loaders/Loader';
import { IPost } from '../interfaces/contentInterfaces/posts/IPost';

interface id {
    id?: string | undefined
}

export const DetailPage: React.FunctionComponent = () => {
    const {id} = useParams()
    const { req, loading } = useHttp()
    const [post, setPost] = useState({} as IPost)

    useEffect(() => {

        // console.log(postId);
        const M = window.M;
        var elems = document.querySelectorAll('.parallax');
        M.Parallax.init(elems, {});
    }, [])



    const getPost = useCallback(async () => {
        const {data} = await req(`http://localhost:3040/api/post/${id}`, 'GET')
   
        setPost(data.post)
    }, [req])

    useEffect(() => {
        getPost()
    }, [getPost])




    if (loading)
        return (
            <Loader />
        )


    return (
        <div>
            {post && !loading &&
                <div className="container">
                    <h1>{post.title}</h1>
                    {post.body}
                    {post.owner && <p> Author: { post.owner.name } </p> }
                    {post.img && <img src={post.img.path} alt="" />}
                    <div className="section">
                        <div className="row">
                            <div className="col s12 m4">
                                <div className="icon-block">
                                    <h2 className="center brown-text"><i className="material-icons">flash_on</i></h2>
                                    <h5 className="center">Speeds up development</h5>

                                    <p className="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
                                </div>
                            </div>

                            <div className="col s12 m4">
                                <div className="icon-block">
                                    <h2 className="center brown-text"><i className="material-icons">group</i></h2>
                                    <h5 className="center">User Experience Focused</h5>

                                    <p className="light">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
                                </div>
                            </div>

                            <div className="col s12 m4">
                                <div className="icon-block">
                                    <h2 className="center brown-text"><i className="material-icons">settings</i></h2>
                                    <h5 className="center">Easy to work with</h5>

                                    <p className="light">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            }
        </div>
    )
}