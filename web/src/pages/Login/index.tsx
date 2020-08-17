import React from 'react';

import Input from '../../components/input';

import './styles.css';
import logoImg from "../../assets/images/logo.svg";

function Login(){
    
    
    return(
        <div id="page-login">
            <div id="page-login-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy"/>
                    <h2> Sua plataforma de <br/>estudos online</h2>
                </div>

                <div className="form-container">
                    <fieldset>
                        <legend>Fazer Login</legend>
                        <input 
                            name="email"
                            type="email" 
                            placeholder="E-mail"
                        />
                        <input
                            name="senha"
                            type="password"
                            placeholder="Senha"
                        />
                        
                    </fieldset>

                    <footer>
                        <span> Lembrar me </span>
                        <span> Esqueci minha senha </span>
                        <button type="submit">
                            Entrar
                        </button>
                    </footer>

                </div>
            </div>
        </div>
    );
}

export default Login;