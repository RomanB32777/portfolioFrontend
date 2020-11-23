import React, { useEffect, useContext } from "react";
import { IPost } from "../../../interfaces/contentInterfaces/posts/IPost";
import { Link } from "react-router-dom";
import { ReducerContext } from "../../../context/reducer/reducerContext";
import Zoom from "react-medium-image-zoom";
import 'react-medium-image-zoom/dist/styles.css'

interface IPropsWorks {
  work: IPost;
}

export const Work: React.FC<IPropsWorks> = ({ work }) => {
  const { state } = useContext(ReducerContext);

  // useEffect(() => {
  //     $(document).ready(function(){
  //         $('.materialboxed').materialbox();
  //       });
  // }, [])
  return (
    <div className="work__slide row">
      <div className="work__gallery col s12 l12">
        <div className="work__big">
          <Zoom >
            <img className="responsive-img" src={work.img.path} alt="" />
          </Zoom>
        </div>
        <div className="work__mini">
          {work.files?.length &&
            work.files.map((file, index) => {
              return (
                <a
                  key={index}
                  aria-label="Первое фото"
                  data-src="../../../img/work-big.png"
                  className=""
                >
                  <Zoom>
                    <img className="responsive-img" src={file.path} alt="" />
                  </Zoom>
                </a>
              );
            })}
        </div>
      </div>

      <div className="work__description col s12 l12">
        <p className="work__description-container">
          <span className="work__description-title"> Название:</span>
          <span className="work__description-item"> {work.title} </span>
        </p>
        <p className="work__description-container work__description-body">
          <span className="work__description-title"> Описание проекта:</span>
          <span className="work__description-item"> {work.body} </span>
        </p>

        {/* <p className="work__description-title"> <a href="#">Посмотреть все проекты</a> </p> */}
        <div className="work__link">
          <a
            className="waves-effect waves-light btn-large"
            href={`/post/${work._id}`}
          >
            Перейти
          </a>
        </div>
        {state.user?.status === "admin" && (
          <Link
            className="waves-effect waves-light blue btn" style={{position: 'absolute', top: 0, right: 0}}
            to={"/admin/edit-post/" + work._id}
          >
            &#9998;
          </Link>
        )}
      </div>
    </div>
  );
};
