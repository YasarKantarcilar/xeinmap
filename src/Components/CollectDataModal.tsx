import ceiling from "../assets/ceiling-panel.png"
import charge from "../assets/charge-station.png"
import staticPanel from "../assets/static-panel.png"
import dynamicPanel from "../assets/dynamic-panel.png"
import { Dispatch, FC, SetStateAction } from "react"
type ModalProps = {
  setMarkable: Dispatch<SetStateAction<boolean>>
  setIsSelectingPanel: Dispatch<SetStateAction<boolean>>
  modalPage: number
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
  setModalPage: Dispatch<SetStateAction<number>>
}
const CollectDataModal: FC<ModalProps> = ({ setIsModalOpen, modalPage, setIsSelectingPanel, setModalPage }) => {
  const options = [
    {
      image: ceiling,
      page: 2
    },
    {
      image: charge,
      page: 2
    },
    {
      image: dynamicPanel,
      page: 1
    },
    {
      image: staticPanel,
      page: 2
    }



  ]
  return (
    <div className="w-[60vw] flex flex-col justify-start px-[4%] items-center h-[70vh] pt-8 gap-10 overflow-y-scroll bg-white z-50 absolute m-auto left-0 top-0 bottom-0 right-0">
      {modalPage === 0 && (<div className="w-full h-full flex flex-col justify-evenly items-center">
        <p className="text-2xl">NE YAPTIRMAK ISTIYORSUNUZ</p>
        <div className="w-full flex justify-center items-center gap-4">
          {options.map((option: { image: string, page: number }, index) => (
            <img onClick={() => setModalPage(option.page)} src={option.image} key={index} className="w-[20%] aspect-square object-cover cursor-pointer" />
          ))}
        </div>
      </div>)}
      {modalPage === 1 && (
        <div className="w-full h-full flex flex-col justify-evenly items-center">
          <p className="text-2xl">YAPTIRMAK ISTEDIGINIZ MESAFE</p>
          <input type="number" placeholder="12" className="w-[40%] border-2 border-black p-2 rounded" />
          <button onClick={() => setModalPage(2)} className="w-[40%] border-2 bg-black border-gray-600 text-white p-2">ONAYLA</button>
        </div>
      )}
      {modalPage === 2 && (
        <div className="w-full h-full flex flex-col justify-evenly items-center">
          <p className="text-2xl">PANO YERI BILION MU</p>
          <div className="w-full flex gap-4 justify-center items-center">
            <button onClick={() => {
              setIsSelectingPanel(true)
              setIsModalOpen(false)
            }} className="w-1/3 p-3 bg-black text-white">EVET</button>
            <button onClick={() => setModalPage(3)} className="w-1/3 p-3 bg-black text-white">HAYIR</button>
          </div>
        </div>
      )}
      {modalPage === 3 && (
        <div className="w-full h-full flex flex-col justify-evenly items-center">
          <input type="text" className="w-2/5 p-2 border-2 border-black rounded" placeholder="ISIM SOYISIM" />
          <input type="text" className="w-2/5 p-2 border-2 border-black rounded" placeholder="TELEFON" />
          <input type="text" className="w-2/5 p-2 border-2 border-black rounded" placeholder="EMAIL" />
          <button className="w-3/5 p-2 bg-black text-white text-xl">ONAYLA</button>

        </div>
      )}
    </div>
  )
}

export default CollectDataModal
