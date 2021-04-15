import React from "react";

import { StyledModal, ModalContent, Close } from "./styles";
import { Flex } from "screens/Dashboard/styles";
import { Title } from "styles";

const Modal = ({ open, children, closeModal, title }) => {
	return (
		<StyledModal id="modal" open={open}>
			<ModalContent>
				<Flex>
					<Title>{title}</Title>
					<Close class="close" onClick={() => closeModal(false)}>
						&times;
					</Close>
				</Flex>
				{children}
			</ModalContent>
		</StyledModal>
	);
};

export default Modal;
