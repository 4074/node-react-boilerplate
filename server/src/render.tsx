import * as React from 'react'
import { renderToString } from 'react-dom/server'
// import { ServerLocation } from "@reach/router"
import { StaticRouter } from 'react-router-dom'
import App from '../../app/src/App'

export default function render(url: string) {
    const html = renderToString(
        <StaticRouter location={url} >
            <App />
        </StaticRouter>
    )
    console.log(url)
    console.log(html)
    return html
}