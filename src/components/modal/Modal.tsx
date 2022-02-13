import React, { useMemo, useState } from 'react';

import styles from 'components/modal/Modal.module.scss';
import classNames from 'classnames';
import { FeedbackProps } from 'components/feedback/Feedback';

const ENDPOINT = 'http://localhost:9000/api/feedback';

interface ModalProps extends Omit<FeedbackProps, 'zIndex'> {
  closeModal: () => void;
}

const Modal = (props: ModalProps): JSX.Element => {
  const {
    projectId,
    primaryColor,
    textColor,
    postSubmitMessage,
    submitButtonMessage,
    showEmail,
    defaultEmail,
    emailRequired,
    closeModal,
  } = props;

  const [formValues, setFormValues] = useState({
    feedbackEmail: defaultEmail ?? '',
    feedbackMessage: '',
  });

  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleInputChange = (e) => {
    setFormValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!loading && !formSubmitted) {
      // submit form once on each trigger
      setLoading(true);

      const payload: {
        project: string;
        email?: string;
        message: string;
        path: string;
      } = {
        project: projectId,
        email: formValues.feedbackEmail ?? undefined,
        message: formValues.feedbackMessage,
        path: window.location.href,
      };

      try {
        await fetch(ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
        setSubmitError(true);
      } finally {
        setFormSubmitted(true);
        setTimeout(() => {
          setLoading(false);
          setTimeout(() => {
            closeModal();
          }, 1000);
        }, 1000);
      }
    }
  };

  const renderButtonContent = useMemo((): JSX.Element | string => {
    if (loading) {
      return <h1>Loading</h1>;
    }
    if (!formSubmitted) {
      return <>{submitButtonMessage} 👋</>;
    }
    if (submitError) {
      return 'Sorry, something went wrong';
    }

    return postSubmitMessage ?? 'Thanks';
  }, [
    formSubmitted,
    loading,
    submitButtonMessage,
    submitError,
    postSubmitMessage,
  ]);

  return (
    <div className={styles.modal}>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        {showEmail && (
          <div className={styles.formGroup}>
            <label htmlFor="feedbackEmail" className={styles.label}>
              Email
              <input
                name="feedbackEmail"
                id="feedbackEmail"
                type="Email"
                placeholder="Enter your email"
                required={emailRequired}
                className={classNames(styles.formControl, styles.input)}
                onChange={handleInputChange}
                value={formValues.feedbackEmail}
              />
            </label>
          </div>
        )}
        <div className={styles.formGroup}>
          <label htmlFor="feedbackEmail" className={styles.label}>
            Feedback Message *
            <textarea
              name="feedbackMessage"
              id="feedbackMessage"
              placeholder="Enter your message"
              required
              rows={5}
              className={styles.formControl}
              value={formValues.feedbackMessage}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <button
          type="submit"
          className={styles.submitButton}
          style={{ background: primaryColor, color: textColor }}
        >
          {renderButtonContent}
        </button>
      </form>
    </div>
  );
};

export default Modal;
