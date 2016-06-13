import { default as React, PropTypes } from 'react';
import MyComponent from './myComponent.jsx';
import OtherComponent from './otherComponent.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {lang: 'en'};
    }
    render() {
        return (
            <div>
                <div className="App">
                    <a onClick={this.handleChangeLanguage.bind(this)}>Change Language</a>
                    <br/>
                    <br/>
                    <br/>
                    <MyComponent lang={this.state.lang}/>
                    <OtherComponent lang={this.state.lang}/>
                </div>
            </div>
        );
    }
    handleChangeLanguage() {
        this.setState({ lang: this.state.lang=='en'?'cn':'en' });
    }
}
export default App;