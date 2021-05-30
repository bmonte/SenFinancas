import Modal from "react-modal";

import closeImg from "assets/close.svg";
import warningImg from "assets/warning.svg";

import {
  ModalAction,
  ModalBody,
  ModalContent,
  ModalTitle,
  ModalWarning,
  Button
} from "./styles";

interface ConfirmationModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  modalTitle: string;
  description: string;
  primaryButtonText: string;
  onClickPrimaryButton: () => void;
  secondaryButtonText?: string;
  onClickSecondaryButton?: () => void;
}

Modal.setAppElement("#root");

export function ConfirmationModal({
  isOpen,
  onRequestClose,
  modalTitle,
  description,
  primaryButtonText,
  onClickPrimaryButton,
  secondaryButtonText,
  onClickSecondaryButton,
}: ConfirmationModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        className="react-modal-close"
        type="button"
        onClick={onRequestClose}
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <div>
        <ModalBody>
          <ModalTitle>
            <img src={warningImg} alt="Atenção!" />

            <ModalWarning>
              <h2>{modalTitle}</h2>
            </ModalWarning>
          </ModalTitle>

          <ModalContent>
            <p>{description}</p>
          </ModalContent>
        </ModalBody>

        <ModalAction>
          {onClickSecondaryButton && secondaryButtonText && (
            <Button text onClick={() => onClickSecondaryButton()}>
              {secondaryButtonText}
            </Button>
          )}

          <Button
            onClick={() => onClickPrimaryButton()}
            style={{ marginLeft: 30 }}
          >
            {primaryButtonText}
          </Button>
        </ModalAction>
      </div>
    </Modal>
  );
}
