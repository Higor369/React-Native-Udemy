import { useNavigation } from "@react-navigation/native";
import Text from "../../../shared/components/text/Text";
import { useRequest } from "../../../shared/hooks/useRequest";
import { useProductReducer } from "../../../store/reducers/productReducers/useProductreducer";
import React, { useEffect, useState } from "react";
import { SearchProductNavigationProp } from "../../searchProduct/screen/SearchProduct";
import { URL_PRODUCT } from "../../../shared/constants/urls";
import { MethodEnum } from "../../../shared/enuns/methods.enum";
import { ProductType } from "../../../shared/types/productType";
import { MenuUrl } from "../../../shared/enums/MenuUrl.enum";
import { View, FlatList, NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { DisplayFlexColumn } from "../../../shared/components/global-styles/globalView.style";
import ProductThumbnail from "../../../shared/components/productThumbnail/ProductThumbnail";
import { HomeContainer } from "../styles/home.style";
import Input from "../../../shared/components/input/Input";


const Home = () => {
    const [search, setSearch] = useState('');
    const { navigate } = useNavigation<SearchProductNavigationProp>();
    const { request } = useRequest();
    const { products, setProducts } = useProductReducer();
    
    useEffect(() => {
        request<ProductType[]>({
          url: URL_PRODUCT,
          method: MethodEnum.GET,
          saveGlobal: setProducts,
        });
      }, []);

      const handleGoToProduct = () => {
        navigate(MenuUrl.SEARCH_PRODUCT, {
          search,
        });
      };

      const handleOnChangeSearch = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setSearch(event.nativeEvent.text);
      };
      
      return (
        <View>
          <HomeContainer>
            <Input
              onPressIconRight={handleGoToProduct}
              value={search}
              onChange={handleOnChangeSearch}
              iconRight="search"
            />
          </HomeContainer>
          <DisplayFlexColumn />
    
          <FlatList
            horizontal
            data={products}
            renderItem={({ item }) => <ProductThumbnail margin="0px 8px" product={item} />}
          />
        </View>
      );
}

export default Home;

