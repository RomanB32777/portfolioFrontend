import React, { useState } from 'react'
import { useHttp } from '../../../hooks/http.hook'
import { useAlert } from '../../alert'

export const FormConnectMe = () => {
    const alert = useAlert()
    const { req, loading } = useHttp()
    const [form, setForm] = useState({
        name: '', email: '', mes: ''
    })
    const changeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const sendForm = async () => {
        try {
            const data = await req('http://localhost:3040/api/mail/', 'POST', { ...form })
            setForm({
                name: '', email: '', mes: ''
            })
            alert("Сообщение успешно отправлено!")
        } catch (error) {
            alert(error)
        }
    }
    return (
     
            <div className="form__wrap wrap col s12 l6 m6">
                <h3 className="form__title">
                    Связаться со мной
                   </h3>
                <form>
                    <div className="row" style={{ marginBottom: 0 }}>
                        <div className="input-field col s12">
                            <i className="material-icons prefix">person</i>
                            <input
                                id="connect_name"
                                type="text"
                                className="validate"
                                name="name"
                                value={form.name}
                                onChange={changeForm}
                            />
                            <label htmlFor="connect_name">Ваше полное имя</label>
                            {/* <span className="helper-text" data-error="wrong" data-success="right">Helper text</span> */}
                        </div>
                        <div className="input-field col s12">
                            <i className="material-icons prefix">email</i>
                            <input
                                id="connect_email"
                                type="email"
                                className="validate"
                                name="email"
                                value={form.email}
                                onChange={changeForm}
                            />
                            <label htmlFor="connect_email">Введите email</label>
                        </div>

                        <div className="input-field col s12">
                            <i className="material-icons prefix">message</i>
                            <input
                                id="connect_message"
                                className="materialize-textarea"
                                type="text"
                                name="mes"
                                value={form.mes}
                                onChange={changeForm}
                            ></input>
                            <label htmlFor="connect_message">Сообщение к письму</label>
                        </div>

                        {/* <div className="input-field col s12">
                                    <i className="material-icons prefix">lock</i>
                                    <input
                                        id="connect_message"
                                        type="text"
                                        className="validate"
                                    />
                                    <label htmlFor="connect_message">Сообщение к письму</label>
                                </div> */}
                    </div>
                    <div className="form__button">
                        <button className="waves-effect waves-light orange btn btn-large" disabled={loading}
                            onClick={sendForm}>Отправить</button>
                    </div>
                </form>
            </div>

           
    )
}