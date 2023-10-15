import styled from "styled-components/native";

interface ContainerTextProps {
    color? : string
    size : string
    custonMargin? : string
    fontFamily: 'Poppins-Bold' | 'Poppins-Light' | 'Poppins-Regular' | 'Poppins-SemiBold';
}

export const ContainerText = styled.Text<ContainerTextProps>`
 ${(props : ContainerTextProps) => props.color ? `color: ${props.color};` : ""}
 ${(props : ContainerTextProps) => props.custonMargin ? `margin: ${props.custonMargin};` : ""}
font-size: ${(props : ContainerTextProps) => props.size};
font-family: ${(props : ContainerTextProps) => props.fontFamily};
padding-top:3px;
`;