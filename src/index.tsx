import React from 'react'
import { render } from 'react-dom'
import App from './component/app'

export const app = <App />
export const here = document.querySelector('#here')

render(app, here)
