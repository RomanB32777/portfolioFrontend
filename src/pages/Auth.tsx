import React, { useContext, useState } from 'react';
import { useAuth } from '../hooks/auth.hook';
import { useHttp } from '../hooks/http.hook';
import { ReducerContext } from '../context/reducer/reducerContext';
import { useHistory } from 'react-router-dom';
import { IFormLogin } from '../interfaces/authFormsInterfaces/IFormLogin';
import { ActionType } from '../context/reducer/types';
import { IUser } from '../interfaces/contentInterfaces/users/IUser';
import { useAlert } from '../components/alert';

export const AuthPage: React.FunctionComponent = () => {
    const auth = useAuth()
    const alert = useAlert()
    const { req, loading } = useHttp()
    const { state, dispatch } = useContext(ReducerContext)
    const history = useHistory()
    const [formLog, setFormLog] = useState({} as IFormLogin)

    const login = async () => {
        try {
            const loginData = await req('http://localhost:3040/api/auth/login', 'POST', { ...formLog })
            const user: IUser = { ...loginData.data.user }
            dispatch({
                type: ActionType.SetIsAuthenticated,
                payload: {
                    user
                }
            })
            auth.login(user)
            alert(loginData.data.mes);

         (user.status === 'admin') ? history.push('/admin') : history.push('/dashboard')
             
        } catch (error) {
            alert(error)
        }
    }

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            console.log("register", state);
        }
    }
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
            setFormLog({ ...formLog, [e.target.name]: e.target.value })
    }
    return (
        <>
        {/* <div id="modal1" className="modal"> */}
        <div className="modal-content" style={{marginTop: '100px'}}>
            <h4>Войти</h4>
            <div className="row">    
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">email</i>
                                <input
                                    id="icon_prefix_reg"
                                    type="email"
                                    className="validate"
                                    data-type="login"
                                    name="email"
                                    value={formLog.email}
                                    onChange={e => changeHandler(e)}
                                />
                                <label htmlFor="icon_prefix_reg">Email</label>
                                <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
                            </div>
                            <div className="input-field col s12">
                                <i className="material-icons prefix">lock</i>
                                <input
                                    id="icon_telephone_reg"
                                    type="password"
                                    className="validate"
                                    data-type="password"
                                    name="password"
                                    onChange={e => changeHandler(e)}
                                    value={formLog.password}
                                    onKeyPress={keyPressHandler}
                                />
                                <label htmlFor="icon_telephone_reg">Пароль</label>
                                
                            </div>
                        </div>
                    </form>
            </div>
        </div>
        <div className="modal-footer">
                    <button
                        disabled={loading}
                        className="waves-effect waves-light orange btn"
                        onClick={login}
                    >
                        Войти
                 </button>
        </div>
    {/* </div> */}
    </>
)
}


