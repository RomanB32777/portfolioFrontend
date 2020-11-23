import React, { useState, useContext, useCallback, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useHttp } from "../../../hooks/http.hook";
import { Photos } from "../PostPhotos";
import { Select } from "../../UI/select/Select";
import { MultipleFileInput } from "../../UI/fileInputs/MultipleInput";
import { FileInput } from "../../UI/fileInputs/FileInput";
import { useAlert } from "../../alert";
import { ReducerContext } from "../../../context/reducer/reducerContext";
import { ActionType } from "../../../context/reducer/types";
import { IPost } from "../../../interfaces/contentInterfaces/posts/IPost";
import { Loader } from "../../UI/loaders/Loader";

export const CreateAdminPosts: React.FC = () => {
  const { req } = useHttp();
  const story = useHistory();
  const alert = useAlert();
  const { state, dispatch, showLoader, hideLoader } = useContext(
    ReducerContext
  );
  const [post, setPost] = useState({} as IPost);
  const { editPostId } = useParams();

  const createDraft = useCallback(async () => {
    if (editPostId) {
      try {
        showLoader();
        const editData = await req(
          `http://localhost:3040/api/post/edit/${editPostId}`,
          "GET",
          null,
          {
            Authorization: `Bearer ${state.user?.token}`,
          }
        );
        if (editData) {
          const editPost = editData.data.post;
          setPost({ ...post, ...editPost });

          $(document).ready(function () {
            M.updateTextFields();
          });
          console.log("Редактирование ЗАПИСИ", editPost);
        }
        hideLoader();
      } catch (error) {
        hideLoader();
        alert(error);
      }
    } else {
      try {
        showLoader();
        const { data } = await req(
          "http://localhost:3040/api/post/create",
          "POST",
          null,
          {
            Authorization: `Bearer ${state.user?.token}`,
          }
        );

        if (data.draftPost) {
          // если есть черновик
          const draft = data.draftPost;
          console.log("Редактирование ЧЕРНОВИКА", draft);
          setPost({ ...post, ...draft });
          $(document).ready(function () {
            M.updateTextFields();
          });
        } else if (data.newPost) {
          // создание черновика
          setPost({ ...post, ...data.newPost });
          console.log("Создание черновика", data.newPost);
        }
        hideLoader();
      } catch (error) {
        hideLoader();
        alert(error);
      }
    }
  }, [req]);

  useEffect(() => {
    createDraft();
  }, [createDraft]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const changeFiles = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = e.target.files;
      var data = new FormData();
      if (post._id) {
        data.append("postId", post._id);
        data.append("typeUpload", "post");
        for (const key of Object.keys(files)) {
          data.append("imgCollection", files[+key]);
        }
        try {
          showLoader();
          const files = await req(
            "http://localhost:3040/api/file/upload-files",
            "POST",
            data,
            {
              "Content-type": "multipart/post-data",
              Authorization: `Bearer ${state.user?.token}`,
            }
          );
          if (files.data.files && post.files) {
            setPost({ ...post, files: [...post.files, ...files.data.files] });
          }
          hideLoader();
        } catch (error) {
          hideLoader();
          alert(error);
        }
      }
    }
  };

  const changeFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      const fileUpload = e.target.files[0];
      if (fileUpload && post._id) {
        const data = new FormData();
        data.append("file", fileUpload);
        data.append("postId", post._id);
        data.append("typeUpload", "post");

        try {
          showLoader();
          const file = await req(
            "http://localhost:3040/api/file/upload",
            "POST",
            data,
            {
              "Content-type": "multipart/post-data",
              Authorization: `Bearer ${state.user?.token}`,
            }
          );
          console.log(file.data);
          if (file.data) setPost({ ...post, img: file.data.result });
          hideLoader();
        } catch (error) {
          hideLoader();
          alert(error);
        }
      }
    }
  };

  const deletePhoto = async (type: string, id: string) => {
    try {
      showLoader();
      const { data } = await req(
        `http://localhost:3040/api/file/delete/${type}/${id}`,
        "DELETE"
      );
      if (type === "imgPost") {
        setPost({ ...post, img: "" });
      } else if (type === "galleryPost") {
        setPost({
          ...post,
          files: post.files?.filter((file) => file._id !== id),
        });
      }
      hideLoader();
    } catch (error) {
      hideLoader();
      console.log(error);
    }
  };

  const createPost = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (post._id) {
      console.log("post", post, state);
      try {
        showLoader();
        const { data } = await req(
          "http://localhost:3040/api/post/edit",
          "POST",
          { ...post, status: "created" },
          {
            Authorization: `Bearer ${state.user?.token}`,
          }
        );
        console.log(data);
        if (editPostId)
          dispatch({
            type: ActionType.UpdatePost,
            payload: {
              post: {
                ...post,
                ...data.post,
              },
            },
          });
        else
          dispatch({
            type: ActionType.AddPost,
            payload: {
              post: {
                ...post,
                ...data.post,
              },
            },
          });
        hideLoader();
        alert("Успех!");
        story.push(`/admin/posts`);
      } catch (error) {
        hideLoader();
        alert(error);
      }
    } else {
      console.log("Заполните данные", post);
    }
  };

  // if (state.loading)
  //  return <Loader/>

  return (
    <div>
      <form className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <input
              id="icon_prefix"
              className="validate"
              type="text"
              name="title"
              onChange={changeHandler}
              value={post.title || ""}
              required
              aria-required="true"
              // ref={emailLogRef}
            />
            <label htmlFor="icon_prefix">Title</label>
          </div>
          <div className="input-field col s12">
            <input
              id="textarea1"
              className="validate"
              type="text"
              name="body"
              // onKeyPress={KeyPress}
              onChange={changeHandler}
              value={post.body || ""}
              required
              aria-required="true"
              // ref={emailLogRef}
            />
            <label htmlFor="textarea1">Text</label>
            <span
              className="helper-text"
              data-error="wrong"
              data-success="right"
            >
              Helper text
            </span>
            {/* <textarea id="textarea1" className="materialize-textarea"></textarea>
                                <label htmlFor="textarea1" onKeyPress={KeyPress} onChange={changeHandlerArea}>Text</label> */}
          </div>
          <div className="input-field col s12">
            <Select
              value={post.type}
              onChange={(e) => setPost({ ...post, type: e.target.value })}
              required={true}
              options={[
                {
                  value: "project",
                  name: "Проект",
                },
                {
                  value: "review",
                  name: "Отзыв",
                },
              ]}
            />
            <label>Тип записи</label>
          </div>
        </div>

        <div className="input-field col s12">
          <p>
            <label>
              <input
                checked={post.inMainPage || false}
                type="checkbox"
                required
                onChange={() =>
                  setPost({ ...post, inMainPage: !post.inMainPage })
                }
              />
              <span>На главный экран</span>
            </label>
          </p>
        </div>

        <div className="input-field col s12">
          <div className="post-group create-img__single" id="img-fileinfo">
            {!post.img ? (
              <p>Фото пока нет</p>
            ) : (
              <div>
                <img src={post.img.path} className="responsive-img" alt="" />
                <a
                  className="btn-floating btn-small waves-effect waves-light red"
                  onClick={() => deletePhoto("imgPost", post.img._id)}
                >
                  x
                </a>
              </div>
            )}
          </div>
          <FileInput
            placeholder={"Добавить заставку для проекта"}
            onChange={changeFile}
            required={true}
          />
        </div>

        <div className="input-field col s12">
          {!post.files?.length ? (
            <p>Фото пока нет</p>
          ) : (
            <Photos files={post.files} deletePhoto={deletePhoto} />
          )}
          <div className="post-group">
            <MultipleFileInput
              placeholder={"Добавить фото в галерею проекта"}
              onChange={changeFiles}
              required={true}
            />
          </div>
        </div>
      </form>

      <button
        className="btn btn-success"
        type="submit"
        name="action"
        onClick={(e) => createPost(e)}
      >
        {editPostId ? "Edit" : "Create"}
      </button>
    </div>
  );
};
