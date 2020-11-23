import React, { useEffect, useContext, useState, useRef } from 'react'
import { useHttp } from '../hooks/http.hook';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../hooks/auth.hook';
import { useAlert } from './alert'
import { ReducerContext } from '../context/reducer/reducerContext';
import { ActionType } from '../context/reducer/types';
import { IUser } from '../interfaces/contentInterfaces/users/IUser';
import { RegisterForm } from './authModalComponents/RegisterForm';
import { LoginForm } from './authModalComponents/LoginRegister';
import { IFormReg } from '../interfaces/authFormsInterfaces/IFormReg';
import { IFormLogin } from '../interfaces/authFormsInterfaces/IFormLogin';
// import reducer from '../reducers/reducer';

export const ModalAuth: React.FunctionComponent = () => {
    const auth = useAuth()
    const alert = useAlert()
    const { req, loading } = useHttp()
    const { state, dispatch } = useContext(ReducerContext)
    const history = useHistory()

    // interface IFormLogin {
    //     email: string,
    //     password: string
    // }
    // interface IFormReg {
    //     email: string,
    //     password: string,
    //     name?: string
    // }

    const [form, setForm] = useState(false)
    const [formReg, setFormReg] = useState({} as IFormReg)
    const [formLog, setFormLog] = useState({} as IFormLogin)

    useEffect(() => {
        var elems3 = document.querySelectorAll('.modal');
        M.Modal.init(elems3, {});
    }, [])


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
            //console.log(user);

            var elem = document.querySelector('.modal');
            if (elem) {
                var instance = M.Modal.getInstance(elem);
                instance.close();
            }
            alert(loginData.data.mes);

         (user.status === 'admin') ? history.push('/admin') : history.push('/dashboard')
             
        } catch (error) {
            alert(error)
        }
    }

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
        if (e.target.getAttribute('data-type') === 'login') {
            setFormLog({ ...formLog, [e.target.name]: e.target.value })
        }
        else if (e.target.getAttribute('data-type') === 'reg') {
            setFormReg({ ...formReg, [e.target.name]: e.target.value })
        }

    }



    return (
        <div id="modal1" className="modal">
            <div className="modal-content">
                <h4>{form ? 'Регистрация' : 'Войти'}</h4>
                <div className="row">
                    {(form) ? 
                        <RegisterForm />
                        // <form className="col s12 form1">
                            
                        //     <div className="row">
                        //         <div className="input-field col s12">
                        //             <i className="material-icons prefix">email</i>
                        //             <input
                        //                 id="icon_prefix_reg"
                        //                 type="email"
                        //                 className="validate"
                        //                 data-type="reg"
                        //                 name="email"
                        //                 value={formReg.email}
                        //                 onChange={e => changeHandler(e)}
                        //             />
                        //             <label htmlFor="icon_prefix_reg">Email</label>
                        //         </div>
                        //         <div className="input-field col s12">
                        //             <i className="material-icons prefix">account_circle</i>
                        //             <input
                        //                 id="icon_name_reg"
                        //                 type="text"
                        //                 className="validate"
                        //                 data-type="reg"
                        //                 name="name"
                        //                 value={formReg.name}
                        //                 onChange={e => changeHandler(e)}
                        //             />
                        //             <label htmlFor="icon_name_reg">Имя</label>
                        //         </div>
                        //         <div className="input-field col s12">
                        //             <i className="material-icons prefix">lock</i>
                        //             <input
                        //                 id="icon_telephone_reg"
                        //                 type="password"
                        //                 className="validate"
                        //                 data-type="reg"
                        //                 name="password"
                        //                 value={formReg.password}
                        //                 onChange={e => changeHandler(e)}
                        //                 onKeyPress={keyPressHandler}
                        //             />
                        //             <label htmlFor="icon_telephone_reg">Пароль</label>
                        //         </div>
                        //     </div>
                        // </form>
                        :
                        <form className="col s12">
                            <LoginForm />
                            <div className="row">
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">email</i>
                                    <input
                                        id="icon_prefix_log"
                                        type="email"
                                        className="validate"
                                        data-type="login"
                                        name="email"
                                        value={formLog.email}
                                        onChange={e => changeHandler(e)}
                                    />
                                    <label htmlFor="icon_prefix_log">Email</label>
                                    <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
                                </div>
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">lock</i>
                                    <input
                                        id="icon_telephone_log"
                                        type="password"
                                        className="validate"
                                        data-type="login"
                                        name="password"
                                        onChange={e => changeHandler(e)}
                                        value={formLog.password}
                                        onKeyPress={keyPressHandler}
                                    />
                                    <label htmlFor="icon_telephone_log">Пароль</label>
                                    
                                </div>
                            </div>
                        </form>
                    }
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" className="modal-close left btn-flat">Отмена</a>


                {!form ?
                    <>
                        <button className="btn-flat" disabled={loading} onClick={() => setForm(true)}>Регистрация</button>
                        <button
                            disabled={loading}
                            className="waves-effect waves-light orange btn"
                            onClick={login}
                        >
                            Войти
                     </button>
                    </>

                    :
                    <>
                        <a
                            href="#!"
                            className={loading ? "btn-flat disabled" : "btn-flat "}
                            onClick={
                                () => setForm(false)
                            }

                        >
                            Войти
                     </a>
                        <a href="#!"
                            className={loading ? "waves-effect waves-light orange btn disabled" : "waves-effect waves-light orange btn "}
                            onClick={register} >Зарегистрировать</a>
                    </>
                }

            </div>
        </div>
    )
}

