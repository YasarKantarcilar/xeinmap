
import distanceImage from "../assets/distance.jpg"
const CollectDataModal = () => {
  return (
    <div className="w-[60vw] flex flex-col justify-start px-[4%] items-center h-[70vh] pt-8 gap-10 overflow-y-scroll bg-white z-50 absolute m-auto left-0 top-0 bottom-0 right-0">
      <div className="w-full flex flex-col justify-center items-center gap-8 h-auto border-b pb-4">
        <p className="text-xl">Für welchen Anlagen-Typ möchten Sie Ihre Fläche prüfen?</p>
        <div className="flex gap-8 justify-center items-center w-full text-white">
          <button className="w-1/4 px-4 py-2 bg-[#3FA14D]">Agri-PV</button>
          <button className="w-1/4 px-4 py-2 bg-[#3FA14D]">Freifläche</button>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-8 h-auto">
        <img className="w-full h-[30vh] object-contain " src={distanceImage} alt="distance" />
        <p className="w-full text-xl text-slate-700 text-center">Tragen Sie bitte Ihre benötigte Bearbeitungsbreite in Metern ein</p>
        <input className="w-1/4 px-4 py-2 bg-slate-300 flex justify-center items-center" type="number" placeholder="12" />
        <button className="w-3/4 rounded-md bg-[#3FA14D] text-white text-xl py-2">Fertig</button>
      </div>
    </div>
  )
}

export default CollectDataModal
