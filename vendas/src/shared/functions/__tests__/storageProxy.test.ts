import { setItemStorage,getItemStorage, removeItemStorage } from "../storageProxy"
import AsyncStorage from '@react-native-async-storage/async-storage';

const mockReturn = 'abc';
const mockKey = 'key';

jest.mock('@react-native-async-storage/async-storage', () => {
    return {
        setItem: jest.fn(() => Promise.resolve()),
        getItem: jest.fn(() => Promise.resolve(mockReturn)),
        removeItem: jest.fn(() => Promise.resolve())
    }
})

describe("strorageProxy", () =>{
    it('should set item in storage', () =>{
        setItemStorage(mockKey, 'value')

        expect(AsyncStorage.setItem).toHaveBeenCalledWith(mockKey, 'value')
    })

    it('should return item in storage', async () =>{
        getItemStorage(mockKey)

        const returnProxy = await getItemStorage(mockKey);
        expect(returnProxy).toEqual(mockReturn)
    })

    it('should remove item in storage', async () =>{
        removeItemStorage(mockKey)

        expect(AsyncStorage.removeItem).toHaveBeenCalledWith(mockKey)
    })

})