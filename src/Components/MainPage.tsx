import { useState } from "react"
import MapComponent from "./MapComponent"
import CollectDataModal from "./CollectDataModal"

const MainPage = () => {
  const [area, setArea] = useState<number[][]>()
  const [marker, setMarker] = useState<number[]>()
  const [markable, setMarkable] = useState<boolean>(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  function createArea(area: number[][]) {
    console.log("createArea called with: ")
    setArea(area)
    setIsModalOpen(true)
  }
  const handleSelectMarker = (...args) => {
    setMarker([...args])
    setMarkable(false)
  }
  console.log("marker main", marker)
  return (
    <div>
      {isModalOpen && !markable && <CollectDataModal />}
      <MapComponent createArea={createArea} markable={markable} marker={marker} setMarker={handleSelectMarker} />
    </div>
  )
}

export default MainPage
