import PropTypes from 'prop-types';
import React from 'react';
import { css } from '@emotion/core';

import SiteNav from './SiteNav';

const Header = ({ defaultBackground }) => (
  <header
    css={css`
      width: 100%;
      height: 30vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: ${defaultBackground ? '#EBC900' : '#99E2E9'};
    `}
  >
    <SiteNav />
  </header>
);

Header.propTypes = {
  defaultBackground: PropTypes.bool,
};

Header.defaultProps = {
  defaultBackground: true,
};

export default Header;
