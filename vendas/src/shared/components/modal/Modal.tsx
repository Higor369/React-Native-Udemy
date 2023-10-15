import { Modal as ModalReact, ModalProps as ModalPropsReact, Button } from 'react-native';
import { textTypes } from '../text/textTypes';
import { theme } from '../../themes/theme';
import Text from '../text/Text';
import { ContainerModal, IconCloseModal } from './modal.style';
import { modalTestId } from './__mocks__/modal.testid';


interface ModalProps extends ModalPropsReact {
    title: string;
    text: string;
    onCloseModal: () => void;
  }
  
  const Modal = ({ title, text, onCloseModal, ...props }: ModalProps) => {
    return (
      <ModalReact animationType="slide" transparent={true} onRequestClose={onCloseModal} {...props}>
      <ContainerModal>
        <Text
          testID={modalTestId.MODAL_TITLE}
          type={textTypes.PARAGRAPH_SEMI_BOLD}
          color={theme.colors.mainTheme.primary}
        >
          {title}
        </Text>
        <Text testID={modalTestId.MODAL_TEXT}>{text}</Text>
        <Button testID={modalTestId.MODAL_CLOSE_BUTTON} title="OK" onPress={onCloseModal} />
        <IconCloseModal testID={modalTestId.MODAL_CLOSE_ICON} onPress={onCloseModal} name="cross" />
      </ContainerModal>
    </ModalReact>
    );
  };
  
  export default Modal;