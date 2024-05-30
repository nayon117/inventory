import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
  } from "@chakra-ui/react";
import SaleForm from "./SaleForm";

const ModalSection = ({isOpen,onClose}) => {
  return (
    <section className="">
      <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sale Order</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <SaleForm/>
          </ModalBody>
        </ModalContent>
        </Modal>
    </section>
  );
};
export default ModalSection;
