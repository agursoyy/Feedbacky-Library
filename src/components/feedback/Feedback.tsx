import React, { useState } from 'react';
import Modal from 'components/modal/Modal';

import styles from 'components/feedback/feedback.module.scss';

export interface FeedbackProps {
  projectId: string;
  primaryColor?: string;
  textColor?: string;
  postSubmitMessage?: string;
  submitButtonMessage?: string;
  showEmail?: boolean;
  defaultEmail?: string;
  emailRequired?: boolean;
  zIndex?: string;
}

const Feedback = (props: FeedbackProps): JSX.Element => {
  const [modalOpen, setModalOpen] = useState(false);
  const { zIndex, primaryColor, textColor } = props;

  const handleToggleModal = () => {
    setModalOpen((value) => !value);
  };

  return (
    <div className={styles.feedbackContainer} style={{ zIndex }}>
      <button
        className={styles.feedbackButton}
        type="button"
        onClick={handleToggleModal}
        style={{ background: primaryColor, color: textColor }}
      >
        {modalOpen ? (
          <svg height="24" width="24" fill={textColor}>
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        ) : (
          <svg height="24" width="24" fill={textColor}>
            <path
              d="M0 0h24v24H0zm15.35 6.41l-1.77-1.77c-.2-.2-.51-.2-.71 0L6 11.53V14h2.47l6.88-6.88c.2-.19.2-.51 0-.71z"
              fill="none"
            />
            <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z" />
          </svg>
        )}
      </button>

      {modalOpen && (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Modal {...props} closeModal={handleToggleModal} />
      )}
    </div>
  );
};

Feedback.defaultProps = {
  primaryColor: '#764abc',
  textColor: '#ffffff',
  postSubmitMessage: 'Thanks for your feedback!',
  submitButtonMessage: 'Send Feedback!',
  showEmail: false,
  defaultEmail: '',
  emailRequired: false,
  zIndex: 999999,
};

export default Feedback;
