import React from "react";

export const RegisterForm: React.FC = () => {
  return (
      <form className="col s12 form1">
        <div className="row">
          <div className="input-field col s12">
            <i className="material-icons prefix">email</i>
            <input
              id="icon_prefix_reg"
              type="email"
              className="validate"
              data-type="reg"
              name="email"
            //   value={formReg.email}
            //   onChange={(e) => changeHandler(e)}
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
            //   value={formReg.name}
            //   onChange={(e) => changeHandler(e)}
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
            //   value={formReg.password}
            //   onChange={(e) => changeHandler(e)}
            //   onKeyPress={keyPressHandler}
            />
            <label htmlFor="icon_telephone_reg">Пароль</label>
          </div>
        </div>
      </form>
  );
};
