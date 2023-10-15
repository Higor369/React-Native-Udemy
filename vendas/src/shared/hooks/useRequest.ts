import { useState } from "react"
import { RequestLogin } from "../types/requestLogin";
import ConnectionAPI, { MethodType, connectionAPIPost } from "../functions/connection/connectionAPI";
import { ReturnLogin } from "../types/returnLogin";
import { UserType } from "../types/userType";
import { useDispatch } from "react-redux";
import { setUserAction } from "../../store/reducers/userReducer";
import { useGlobalReducer } from "../../store/reducers/globalReducer/useGlobalReducer";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { StackNavigationProp} from '@react-navigation/stack';
import { setAuthorizationToken } from "../functions/connection/auth";

interface requestProps<T, B = unknown> {
    url: string;
    method: MethodType;
    saveGlobal?: (object: T) => void;
    body?: B;
    message?: string;
  }

export const useRequest = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErroMessage] = useState('');
    const { setModal } = useGlobalReducer();
    const {reset} = useNavigation<StackNavigationProp<ParamListBase>>();


    const request = async <T, B = unknown>({
        url,
        method,
        saveGlobal,
        body,
        message,
      }: requestProps<T, B>): Promise<T | undefined> => {
        setLoading(true);
        const returnObject: T | undefined = await ConnectionAPI.connect<T, B>(url, method, body)
          .then((result) => {
            if (saveGlobal) {
              saveGlobal(result);
            }
            if (message) {
              setModal({
                visible: true,
                title: 'Sucesso!',
                text: message,
              });
            }
            return result;
          })
          .catch((error: Error) => {
            setModal({
              visible: true,
              title: 'Erro',
              text: error.message,
            });
            return undefined;
          });
    
        setLoading(false);
        return returnObject;
      };

    const authRequest = async (body: RequestLogin) => {
        setLoading(true);
        await connectionAPIPost<ReturnLogin>("http://192.168.5.32:8080/auth", body)
        .then(result => {
            setAuthorizationToken(result.accessToken)
            dispatch(setUserAction(result.user));
           reset({
            index: 0,
            routes : [{name: 'Home'}]
           });
        })
        .catch((error: Error) => {
            console.log(error)
            setModal({
                visible: true,
                title: 'Erro',
                text: error.message,
              });
              return undefined;
        });
        setLoading(false);
    }

    return {
        loading,
        errorMessage,
        setErroMessage,
        authRequest,
        request
    }



}