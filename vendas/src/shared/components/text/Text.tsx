import { TextProps } from "react-native";
import { ContainerText } from "./Text.style";
import { textTypes } from "./textTypes";
import { useMemo } from "react";

interface TextMyProps extends TextProps {
    color? : string
    type? : string
    customMargin? : string

}

const Text = ({customMargin,color,type,...props} : TextMyProps) => {

    const fontSize = useMemo(() => {
        switch (type) {
          case textTypes.TITLE_BOLD:
          case textTypes.TITLE_LIGHT:
          case textTypes.TITLE_REGULAR:
          case textTypes.TITLE_SEMI_BOLD:
            return '24px';
          case textTypes.SUB_TITLE_BOLD:
          case textTypes.SUB_TITLE_LIGHT:
          case textTypes.SUB_TITLE_REGULAR:
          case textTypes.SUB_TITLE_SEMI_BOLD:
            return '20px';
          case textTypes.BUTTON_BOLD:
          case textTypes.BUTTON_LIGHT:
          case textTypes.BUTTON_REGULAR:
          case textTypes.BUTTON_SEMI_BOLD:
            return '18px';
          case textTypes.PARAGRAPH_SMALL_BOLD:
          case textTypes.PARAGRAPH_SMALL_LIGHT:
          case textTypes.PARAGRAPH_SMALL_REGULAR:
          case textTypes.PARAGRAPH_SMALL_SEMI_BOLD:
            return '10px';
          case textTypes.PARAGRAPH_BOLD:
          case textTypes.PARAGRAPH_LIGHT:
          case textTypes.PARAGRAPH_REGULAR:
          case textTypes.PARAGRAPH_SEMI_BOLD:
          default:
            return '14px';
        }
      }, [type]);

      const fontFamily = useMemo(() => {
        switch (type) {
          case textTypes.TITLE_BOLD:
          case textTypes.BUTTON_BOLD:
          case textTypes.SUB_TITLE_BOLD:
          case textTypes.PARAGRAPH_SMALL_BOLD:
          case textTypes.PARAGRAPH_BOLD:
            return 'Poppins-Bold';
          case textTypes.BUTTON_LIGHT:
          case textTypes.TITLE_LIGHT:
          case textTypes.SUB_TITLE_LIGHT:
          case textTypes.PARAGRAPH_SMALL_LIGHT:
          case textTypes.PARAGRAPH_LIGHT:
            return 'Poppins-Light';
          case textTypes.BUTTON_SEMI_BOLD:
          case textTypes.TITLE_SEMI_BOLD:
          case textTypes.SUB_TITLE_SEMI_BOLD:
          case textTypes.PARAGRAPH_SMALL_SEMI_BOLD:
          case textTypes.PARAGRAPH_SEMI_BOLD:
            return 'Poppins-SemiBold';
          case textTypes.BUTTON_REGULAR:
          case textTypes.TITLE_REGULAR:
          case textTypes.SUB_TITLE_REGULAR:
          case textTypes.PARAGRAPH_SMALL_REGULAR:
          case textTypes.PARAGRAPH_REGULAR:
          default:
            return 'Poppins-Regular';
        }
      }, [type]);

    return(
        <ContainerText custonMargin={customMargin} fontFamily={fontFamily}  size={fontSize} color={color} {...props} >

        </ContainerText>
    );
}

export default Text;