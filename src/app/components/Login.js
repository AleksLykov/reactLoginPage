import React from 'react'

export default class Login extends React.Component {
    render() {
        return <form className='login-form'>
            <img src={this.props.logoLogin} alt='Login logo' className='login-logo'></img>
            <input className='login-input' placeholder='Username / Имя' type='text' required></input>
            <input className='login-input' placeholder='Password / Пароль' type='password' required></input>
            <input className='login-input' type='submit' value='LOGIN / ВОЙТИ'></input>
        </form>
    }
}