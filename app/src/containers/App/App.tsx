import * as React from 'react'
import { connect } from 'react-redux'
import { load } from '../../redux/reducers/public/time'

class App extends React.Component<any, any> {
    componentDidMount() {
        const { load } = this.props
        load()
    }
    render() {
        return (
            <div>
                Hello World!
            </div>
        )
    }

}

export default connect((state: any) => ({time: state.time}), { load })(App)