import React, { memo } from 'react';
import _ from 'lodash';

import './styles.scss';

const Disconnected = ({ description }) => (
    <div className="disconnected">
        <div className="disconnected__description">{description}</div>
        <img className="disconnected__img" src="https://i.giphy.com/media/l1J9EdzfOSgfyueLm/giphy.webp" />
    </div>
);

export default memo(Disconnected);