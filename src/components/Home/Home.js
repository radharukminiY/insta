import React,{Component} from  'react';
import NavBar from '../NavBar/NavBar';
import Content from '../Content/Content';
import './Home.css';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
            <div>
                <NavBar />
                <Content />
            </div>
         );
    }
}

export default Home;
