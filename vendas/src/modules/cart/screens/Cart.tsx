import { useEffect } from 'react';

import Text from '../../../shared/components/text/Text';
import { URL_CART } from '../../../shared/constants/urls';
import { useRequest } from '../../../shared/hooks/useRequest';
import { useCartReducer } from '../../../store/reducers/cartReducer/useCartReducer';
import { MethodEnum } from '../../../shared/enuns/methods.enum';

const Cart = () => {
  const { request } = useRequest();
  const { cart, setCart } = useCartReducer();

  useEffect(() => {
    request({
      url: URL_CART,
      method: MethodEnum.GET,
      saveGlobal: setCart,
    });
  }, []);

  console.log('cart', cart);

  return <Text>Carrinho</Text>;
};

export default Cart;
