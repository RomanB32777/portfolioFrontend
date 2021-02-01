import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAlert } from '../components/alert';
import { ReducerContext } from '../context/reducer/reducerContext';
import { ActionType } from '../context/reducer/types';
import { useAuth } from '../hooks/auth.hook';
import { useHttp } from '../hooks/http.hook';
import { IFormReg } from '../interfaces/authFormsInterfaces/IFormReg';
import { IUser } from '../interfaces/contentInterfaces/users/IUser';

export const RegisterPage: React.FunctionComponent = () => {
    const auth = useAuth()
    const alert = useAlert()
    const { req, loading } = useHttp()
    const { state, dispatch } = useContext(ReducerContext)
    const history = useHistory()
    const [formReg, setFormReg] = useState({} as IFormReg)

    // const login = async () => {
    //     try {
    //         const loginData = await req('http://localhost:3040/api/auth/register', 'POST', { ...formLog })
    //         const user: IUser = { ...loginData.data.user }
    //         dispatch({
    //             type: ActionType.SetIsAuthenticated,
    //             payload: {
    //                 user
    //             }
    //         })
    //         auth.login(user)
    //         alert(loginData.data.mes);

    //      (user.status === 'admin') ? history.push('/admin') : history.push('/dashboard')
             
    //     } catch (error) {
    //         alert(error)
    //     }
    // }

    const register = async () => {
        try {
            const reg = await req('http://localhost:3040/api/auth/register', 'POST', { ...formReg })
            console.log('data', reg);
            alert(reg.data.mes)
            history.push('/')
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
            setFormReg({ ...formReg, [e.target.name]: e.target.value })
    }
    return (
        <>
        <div className="modal-content" style={{marginTop: '100px'}}>
            <h4>Регистрация</h4>
            <div className="row">    
                    <form className="col s12">
                    <div className="row">
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">email</i>
                                    <input
                                        id="icon_prefix_reg"
                                        type="email"
                                        className="validate"
                                        data-type="reg"
                                        name="email"
                                        value={formReg.email}
                                        onChange={e => changeHandler(e)}
                                    />
                                    <label htmlFor="icon_prefix_reg">Email</label>
                                </div>
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">account_circle</i>
                                    <input
                                        id="icon_name_reg"
                                        type="text"
                                        className="validate"
                                        data-type="reg"
                                        name="name"
                                        value={formReg.name}
                                        onChange={e => changeHandler(e)}
                                    />
                                    <label htmlFor="icon_name_reg">Имя</label>
                                </div>
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">lock</i>
                                    <input
                                        id="icon_telephone_reg"
                                        type="password"
                                        className="validate"
                                        data-type="reg"
                                        name="password"
                                        value={formReg.password}
                                        onChange={e => changeHandler(e)}
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
                        onClick={register}
                    >
                        Зарегистрировать
                 </button>
        </div>
    {/* </div> */}
    </>
    )
}
