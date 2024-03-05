import { useState } from "react"
import MapComponent from "./MapComponent"
import CollectDataModal from "./CollectDataModal"

const MainPage = () => {
  const [area, setArea] = useState<number[][]>()
  const [marker, setMarker] = useState<number[]>()
  const [markable, setMarkable] = useState<boolean>(false)
  const [modalPage, setModalPage] = useState<number>(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  function createArea(area: number[][]) {
    console.log("createArea called with: ")
    setArea(area)
    setIsModalOpen(true)
  }
  console.log(area)
  const handleSelectMarker = (...args: any) => {
    setMarker([...args])
    setMarkable(false)
  }
  console.log("marker main", marker)
  return (
    <div>
      {isModalOpen && !markable && <CollectDataModal modalPage={modalPage} setModalPage={setModalPage} />}
      <MapComponent createArea={createArea} markable={markable} marker={marker} setMarker={handleSelectMarker} />
    </div>
  )
}

export default MainPage
