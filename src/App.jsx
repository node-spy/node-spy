import React, {Component} from 'react'
import {render} from 'react-dom'
import ReqView from './ReqView.jsx';
import ResView from './ResView.jsx';
import RouteView from './RouteView.jsx';
import nodeSpy from '../lib/node-spy';

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
			// 	componentDidMount() {
			//   }

    }


    render() {

      return (
            <div>
				<RouteView />
				<ReqView />
				<ResView />
            </div>
		     )
    }

}

export default App;
