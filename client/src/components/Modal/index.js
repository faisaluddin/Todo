import React from "react";

import { StyledModal, ModalContent, Close } from "./styles";

const Modal = ({ open, children, closeModal }) => {
	return (
		<StyledModal id="modal" open={open}>
			<ModalContent>
				<Close class="close" onClick={() => closeModal(false)}>
					&times;
				</Close>
				{children}
			</ModalContent>
		</StyledModal>
	);
};

export default Modal;
