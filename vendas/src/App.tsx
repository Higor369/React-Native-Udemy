import store from './store'
import { Provider } from 'react-redux'
import GlobalModal from "./shared/components/modal/global-modal/GlobalModal";
import * as React from 'react';
import Navigation from "./Navigation";

const App = () => {

    return (
        <Provider store={store}>
            <GlobalModal />
           <Navigation />
        </Provider>
    )
};

export default App;