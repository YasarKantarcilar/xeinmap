
import { Dispatch, SetStateAction } from "react"
type ModalProps = {
  modalPage: number,
  setModalPage: Dispatch<SetStateAction<number>>
}
const CollectDataModal = ({ modalPage, setModalPage }: ModalProps) => {
  return (
    <div className="w-[60vw] flex flex-col justify-start px-[4%] items-center h-[70vh] pt-8 gap-10 overflow-y-scroll bg-white z-50 absolute m-auto left-0 top-0 bottom-0 right-0">

    </div>
  )
}

export default CollectDataModal
