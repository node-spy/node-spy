import React, {Component} from 'react'
import {render} from 'react-dom'
import ReqView from './Request';
import ResView from './Response';
import RouteView from './RouteView';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: "",
            method: "",
            statusCode: "",
            reqLogs: [],
            resLogs: []
        }
				componentDidMount() {
			  }

    }

    render() {

      return (
				<RouteView />
				<ReqView/>
				<ResView />
		     )
    }

}

export default App;
