import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import {FirstApp} from './FirstApp'
import './styles.css'
import { CounterApp } from './CounterApp'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp title ={'Udemy'} subtitle={'popopo'} name={'Fede'}/>
        {/* <CounterApp value={2}/> */}
    </React.StrictMode>
)