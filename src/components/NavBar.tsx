import { FC } from 'react';
import classNames from 'classnames';

import { NavLink } from 'react-router-dom';

type Props = {
  to: string,
  text: string,
};

export const NavBar: FC<Props> = ({ to, text }) => (
  <NavLink
    to={to}
    className={({ isActive }) => classNames(
      'navbar-item',
      {
        'has-background-grey-lighter': isActive,
      },
    )}
  >
    {text}
  </NavLink>
);