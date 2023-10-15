import { useEffect } from "react"
import { ContainerSplash, ImagelogoSplash } from "../styles/splash.style"
import { URL_USER } from "../../../shared/constants/urls";
import { MethodEnum } from "../../../shared/enuns/methods.enum";
import { getAuthorizationToken } from "../../../shared/functions/connection/auth";
import { UserType } from "../../../shared/types/userType";
import { useRequest } from "../../../shared/hooks/useRequest";
import { useNavigation, NavigationProp, ParamListBase } from "@react-navigation/native";
import { useUserReducer } from "../../../store/reducers/userReducer/useUserReducer";
import { MenuUrl } from "../../../shared/enums/MenuUrl.enum";

const Splash = () => {
    const { reset } = useNavigation<NavigationProp<ParamListBase>>();
    const { request } = useRequest();
    const { setUser } = useUserReducer();

    useEffect( () => {
        const findUser = async (): Promise<undefined | UserType> => {
            let returnUser;
            const token = await getAuthorizationToken();
            if (token) {
              returnUser = await request<UserType>({
                url: URL_USER,
                method: MethodEnum.GET,
                saveGlobal: setUser,
              });
            }
      
            return returnUser;
          };

          const verifyLogin = async () => {
            const [returnUser] = await Promise.all([
              findUser(),
              new Promise<void>((r) => setTimeout(r, 5000)),
            ]);
      
            if (returnUser) {
              reset({
                index: 0,
                routes: [{ name: MenuUrl.HOME }],
              });
            } else {
              reset({
                index: 0,
                routes: [{ name: MenuUrl.LOGIN }],
              });
            }
          };
      
          verifyLogin();

    },[])

    return (
    <ContainerSplash>
      <ImagelogoSplash resizeMode="contain" source={require('../../../assets/images/logo.png')} />
    </ContainerSplash>
    )
}

export default Splash