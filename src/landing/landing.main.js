import React, {Component} from 'react';
import Previewer from './previewer/previewer.main';
import './landing.css';

class Landing extends Component {
    render() {
        return (
            <div className='landing-main'>
                <Previewer />
            </div>
        );
    }
}

export default Landing;
