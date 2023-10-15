import { useState } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { useRequest } from "../../../shared/hooks/useRequest";
import { useNavigation, NavigationProp, ParamListBase } from "@react-navigation/native";
import { MenuUrl } from "../../../shared/enums/MenuUrl.enum";

export const useLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { navigate } = useNavigation<NavigationProp<ParamListBase>>();

    const {
        loading,
        errorMessage,
        setErroMessage,
        authRequest
    } = useRequest();

    const handleOnPress = async () => {
        authRequest({email, password})
    }

    const handleOnChanegeEmail = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setErroMessage('')
        setEmail(event.nativeEvent.text)
    }

    const handleOnChanegePassword = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setErroMessage('')
        setPassword(event.nativeEvent.text)
    }

    const handleGoToCreateUser = () => {
        navigate(MenuUrl.CREATE_USER);
      };

    return {
        email,
        password,
        loading,
        errorMessage,
        handleOnChanegeEmail,
        handleOnChanegePassword,
        handleOnPress,
        handleGoToCreateUser
    }

}