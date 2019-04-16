import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { load } from '../../redux/reducers/public/time'

class App extends React.Component<any, any> {
    componentDidMount() {
        const { time, load } = this.props
        if (!time.loaded) {
            load()
        }
    }
    render() {
        const { time } = this.props
        return (
            <div>
                { time.loaded && time.data.date }
                <Link to="/">Go to Home</Link>
            </div>
        )
    }
}

export default connect((state: any) => ({time: state.time}), { load })(App)