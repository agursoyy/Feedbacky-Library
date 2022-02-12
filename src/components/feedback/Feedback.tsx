import React, { useState } from 'react';
import RateReviewIcon from '@mui/icons-material/RateReview';
import CloseIcon from '@mui/icons-material/Close';

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
  const [modalOpen, setModalOpen] = useState(true);
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
        {modalOpen ? <CloseIcon /> : <RateReviewIcon />}
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
  showEmail: true,
  defaultEmail: '',
  emailRequired: true,
  zIndex: 999999,
};

export default Feedback;
