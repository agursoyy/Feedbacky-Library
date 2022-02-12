import React from 'react';
import ReactDOM from 'react-dom';

import Feedback, { FeedbackProps } from 'components/feedback/Feedback';

import 'common/style/global.scss';

type RenderProps = {
  elementId: string;
  config: FeedbackProps;
};

// eslint-disable-next-line import/prefer-default-export
export const render = (renderProps: RenderProps) => {
  const el = document.getElementById(renderProps.elementId);

  if (el) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    ReactDOM.render(<Feedback {...renderProps.config} />, el);
  }
};
