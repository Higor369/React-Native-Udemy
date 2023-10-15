import styled from "styled-components/native";
import { theme } from "../../themes/theme";
import { Icon } from "../icon/icon";

interface ContainerInputProps {
    isError? : boolean;
    hasSecureTextEntry?: boolean;
}

export const ContainerInput = styled.TextInput<ContainerInputProps>`
width: 100%;
height: 48px;
padding: 16px;
background-color: ${theme.colors.neutralTheme.white};
color: ${theme.colors.neutralTheme.black};
border-radius: 4px;

padding-right: ${(props: ContainerInputProps ) => props.hasSecureTextEntry ? '60px' : '16px'};

border-width: 1px;
${(props: ContainerInputProps) => (props.isError ? `border-color: ${theme.colors.orangeTheme.orange80}` : `border-color: ${theme.colors.grayTheme.gray80}` )}
`;

export const IconEye = styled(Icon)`
position: absolute;
right: 10px;
top: 12px;
`

export const IconSearch = styled(Icon)`
  position: absolute;
  right: 16px;
  top: 12px;
`;

