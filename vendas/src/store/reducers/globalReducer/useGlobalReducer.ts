import { useDispatch } from "react-redux"
import { useAppSelector } from "../../hooks"
import { setModalAction } from "."
import { GlobalModalType } from "../../../shared/components/modal/global-modal/GlobalModal"

export const useGlobalReducer = () => {
    const {modal} = useAppSelector((state) => state.globalReducer)
    const dispatch = useDispatch()

    const closeModal = () => {
        dispatch(setModalAction({
            ...modal,
            visible : false
        }))
    }

    const setModal = (currentModal: GlobalModalType) => {
        dispatch(setModalAction(currentModal));
      };

    return {
        modal,
        closeModal,
        setModal
    }
}