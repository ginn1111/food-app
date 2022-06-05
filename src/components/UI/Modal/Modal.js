import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.scss';

const BackDrop = (props) => (
    <div className={styles.backdrop} onClick={props.onCloseModal} />
);

const ModalOverlays = (props) => {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>{props.children}</div>
        </div>
    );
};

const Modal = (props) => {
    const overlays = document.getElementById('overlays');
    return (
        <>
            {ReactDOM.createPortal(
                <BackDrop onCloseModal={props.onCloseModal} />,
                overlays,
            )}
            {ReactDOM.createPortal(
                <ModalOverlays>{props.children}</ModalOverlays>,
                overlays,
            )}
        </>
    );
};

export default Modal;
