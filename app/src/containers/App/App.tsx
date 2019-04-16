import * as React from 'react'
import { Link } from 'react-router-dom'

import { Button } from 'antd'
// import 'antd/dist/antd.css'

export default class App extends React.Component<any, any> {
    render() {
        return (
            <div>
                Hello World!
                <Button type="primary">Button</Button>
                <Link to="time">Go to Time</Link>
            </div>
        )
    }
}