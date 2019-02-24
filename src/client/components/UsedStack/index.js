import React from 'react';

import './styles.scss';

const UsedStack = () => (
    <div className="stack">
        <div className="title stack__title">Stack used to create Smoggio app</div>
        <div className="stack__list">
            <div className="stack__list-item">React 16.7</div>
            <div className="stack__list-sublist">
                <div className="stack__list-subitem">Context API</div>
                <div className="stack__list-subitem">UseEffect</div>
                <div className="stack__list-subitem">UseReducer</div>
                <div className="stack__list-subitem">UseState</div>
            </div>
            <div className="stack__list-item">Server Side Rendering</div>
            <div className="stack__list-item">MobX</div>
            <div className="stack__list-item">Express</div>
            <div className="stack__list-item">SCSS</div>
            <div className="stack__list-item">Webpack</div>
        </div>
    </div>
);

export default UsedStack;