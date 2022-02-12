import React from 'react';
import classnames from 'classnames';

import styles from 'components/button/button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: 'basic' | 'icon';
  buttonColor?: 'primary' | 'secondary';
  icon?: JSX.Element;
  block?: boolean;
}

const Button = (props: ButtonProps): JSX.Element => {
  const {
    buttonType = 'basic',
    buttonColor = 'primary',
    icon,
    children,
    className,
    block,
    ...other
  } = props;

  return (
    <button
      type="button"
      className={classnames(
        styles.button,
        block && styles.block,
        styles[buttonType],
        styles[buttonColor],
        className
      )}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...other}
    >
      {icon}
      {children}
    </button>
  );
};

Button.defaultProps = {
  buttonColor: 'primary',
  buttonType: 'basic',
  icon: undefined,
  block: false,
};
export default Button;
