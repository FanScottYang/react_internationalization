import { default as React } from 'react';
import en from './i18n/en.jsx';
import cn from './i18n/cn.jsx';

const languages = {
    en,
    cn
};

export default function translate(key) {
    return Component => {
        class TranslationComponent extends React.Component {
            render() {
                var strings = languages[this.props.lang][key];
                return <Component {...this.props} {...this.state} strings={strings} />;
            }
        }

        TranslationComponent.contextTypes = {
            currentLanguage: React.PropTypes.string
        };

        return TranslationComponent;
    };
}