import React, { useContext } from 'react'
import { ActionType } from '../context/reducer/types'
import { Switch, Route, Link } from 'react-router-dom';
import { FileInput } from '../components/UI/fileInputs/FileInput';
import Axios, { AxiosRequestConfig } from 'axios';
import { useAuth } from '../hooks/auth.hook';
import { ReducerContext } from '../context/reducer/reducerContext';

export const ProfilePage: React.FunctionComponent = () => {
    const { state, dispatch } = useContext(ReducerContext)
    const { update } = useAuth()
    const changeFile = (e: React.ChangeEvent<HTMLInputElement>) => {

        if (e.target.files?.length) {
            const fileUpload = e.target.files[0]
            if (fileUpload) {
                const data = new FormData();
                data.append('file', fileUpload)
                data.append('typeUpload', 'avatar')

                const config: AxiosRequestConfig = {
                    url: 'http://localhost:3040/api/file/upload',
                    method: 'POST',
                    data,
                    headers: {
                        "Content-type": "multipart/post-data",
                        Authorization: `Bearer ${state.user?.token}`,
                    }
                }
                const fromDB = Axios(config)
                    .then(res => {
                        const {_id, path} = res.data.result
                        update({
                            ...state.user,
                            avatar: {_id, path}
                        })
                        dispatch({
                            type: ActionType.UpdateUser,
                            payload: {
                                user: {
                                    ...state.user,
                                    avatar: {_id, path}
                                }
                            }
                        })
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        }
    }

    return (
        <div className="container" style={{
            //height: '100vh',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '100px'
        }}>
            <div>
                {state.user?.avatar && 
                <img style={{maxHeight: '150px'}} className="circle responsive-img" src={state.user?.avatar.path} />}
                <h1 style={{ fontWeight: 'bold' }}>Profile</h1>
                <ul>
                    <li>
                        <Link to="/dashboard/"> Dashboard </Link>
                        <Link to="/dashboard/settings"> Settitng </Link>
                    </li>
                </ul>

                {/* <div style={{paddingTop:'100.000%', position:'relative'}}><iframe src="https://gifer.com/embed/9Eag" width="100%" height="100%" style={{position:'absolute',top:0,left:0}} frameBorder="0" allowFullScreen></iframe></div><p></p> */}

                <Switch>
                    <Route path="/dashboard/settings">
                        <div>
                            <h6>Settitngs</h6>
                            <p>Change avatar</p>
                            <div className="post-group" id="img-fileinfo" style={{ justifyContent: 'center' }}>
                                <FileInput placeholder={"Поменять фото профиля"} onChange={changeFile} required={false} />
                            </div>
                        </div>


                    </Route>
                    <Route path="/dashboard/" exact>
                        <div>
                            {state.user &&
                                <p> Hello, {state.user.name}!</p>
                            }
                        </div>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}