import { TouchableOpacity, View } from "react-native"
import { ContainerLogin, ImageLogo } from "../styles/login.style";
import Input from "../../../shared/components/input/Input";
import Button from "../../../shared/components/button/Button";
import { theme } from "../../../shared/themes/theme";
import { useLogin } from "../hooks/useLogin";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect } from 'react';
import Text from "../../../shared/components/text/Text";
import { textTypes } from "../../../shared/components/text/textTypes";

const Login = () => {
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>()
    const {
        email,
        password,
        loading,
        errorMessage,
        handleOnChanegeEmail,
        handleOnChanegePassword,
        handleOnPress,
        handleGoToCreateUser
    } = useLogin();

    return (
        <View>
            <ContainerLogin>
                <ImageLogo resizeMode="center" source={require('../../../assets/images/logo.png')} ></ImageLogo>
                <Input
                    onChange={handleOnChanegeEmail}
                    value={email}
                    errorMessage={errorMessage}
                    placeholder="Digite seu e-mail" title="Email"></Input>
                <Input
                    value={password}
                    errorMessage={errorMessage}
                    onChange={handleOnChanegePassword}
                    placeholder="Digite sua senha" secureTextEntry title="Email"></Input>
                <TouchableOpacity onPress={handleGoToCreateUser}>
                    <Text
                        customMargin="16px"
                        type={textTypes.PARAGRAPH_SEMI_BOLD}
                        color={theme.colors.mainTheme.primary}
                    >
                        Cadastrar usuário
                    </Text>
                </TouchableOpacity>
                <Button
                    loading={loading}
                    type={theme.buttons.buttonsTheme.primary}
                    margin="8px"
                    title="ENTRAR"

                    onPress={handleOnPress}
                ></Button>
            </ContainerLogin>
        </View>
    )
}

export default Login;
