import React from 'react'
import ReactDOM from 'react-dom'
import './app/styles/style.css'
import Menu from './app/components/Menu'
import Login from './app/components/Login'

class App extends React.Component {
    render() {
        const menuItems = [
            { href: './tech.html', title: 'Technologies'},
            { href: './service.html', title: 'Services'},
            { href: './about.html', title: 'About Us'},
            { href: './contacts.html', title: 'Contacts'}
        ]
        const logoMainPath = './img/logo1.png'
        const logoLoginPath = './img/login-logo.png'
        return (
        <div>
            <Menu items = {menuItems} logoLink = {logoMainPath}/>
            <Login logoLogin = {logoLoginPath}/>
        </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))