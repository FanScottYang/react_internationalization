import { default as React, PropTypes } from 'react';
import translate from './translate.jsx';


class OtherComponent extends React.Component {
    render() {
        return (
             <div>
                { this.props.strings.otherText }
             </div>
        );
    }
}

OtherComponent.propTypes = {
    strings: PropTypes.object
};

OtherComponent.defaultProps = {
     strings: {
         otherText: 'Try me, soft!'
     }
};

export default translate('OtherComponent')(OtherComponent);