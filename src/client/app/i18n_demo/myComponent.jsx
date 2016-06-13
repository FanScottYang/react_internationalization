import { default as React, PropTypes } from 'react';
import translate from './translate.jsx';


class MyComponent extends React.Component {
    render() {
        return (
             <div>
                { this.props.strings.someTranslatedText }
                { this.props.strings.saySomething }
             </div>
        );
    }
}

MyComponent.propTypes = {
    strings: PropTypes.object
};

MyComponent.defaultProps = {
     strings: {
         helloWorld: 'Hello World!',
         saySomething: 'Beautiful Sunshine!'
     }
};

export default translate('MyComponent')(MyComponent);