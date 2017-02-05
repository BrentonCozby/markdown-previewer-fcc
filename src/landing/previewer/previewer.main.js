import React, {Component} from 'react';
import marked from 'marked';
import htmlParser from 'html-react-parser';
import defaultText from './default-text';
import './previewer.css';

class Previewer extends Component {
    state = {
        input: defaultText
    };

    onInputChange = (event) => {
        this.setState({input: event.target.value});
    }

    render() {
        return (
            <div className="previewer-main">
                <textarea value={this.state.input} className='markdown-input' onChange={this.onInputChange}/>
                <div className='markdown-output'>
                    {htmlParser(marked(this.state.input, {sanitize: true}))}
                </div>
            </div>
        );
    }
}

export default Previewer;
