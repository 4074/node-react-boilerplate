import * as React from 'react'
import { Link } from '@reach/router'

export default class App extends React.Component<any, any> {
    render() {
        return (
            <div>
                Hello World!
                <Link to="time">Go to Time</Link>
            </div>
        )
    }
}