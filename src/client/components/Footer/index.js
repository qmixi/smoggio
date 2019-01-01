import React from 'react';

import { ModalConsumer } from '../Modal';
import UsedStack from '../UsedStack';

import './styles.scss';

const Footer = () => (
    <div className="footer">
        <img src="/static/logo.png" />
        <div className="footer__description">Powered by Airly</div>
        <a className="footer__link" href="http://www.map.airly.eu" target="_blank">www.map.airly.eu</a>
        <ModalConsumer>
            {({ showModal }) =>
                <div className="footer__stack" onClick={() => showModal(<UsedStack />)}>Show used stack</div>
            }
        </ModalConsumer>
    </div>
)

export default Footer;