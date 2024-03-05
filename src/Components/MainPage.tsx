import { useCallback, useState } from "react"
import MapComponent from "./MapComponent"
import CollectDataModal from "./CollectDataModal"

const MainPage = () => {
  const [area, setArea] = useState<number[][]>()
  const [modalPage, setModalPage] = useState<number>(0)
  const [marker, setMarker] = useState<number[]>()
  const [isSelectingPanel, setIsSelectingPanel] = useState<boolean>(false)
  const [markable, setMarkable] = useState<boolean>(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  function createArea(areaParam: number[][]) {
    console.log("createArea called with: ", areaParam)
    setArea(areaParam)
    setIsModalOpen(true)
  }
  console.log(area, "area")
  console.log(marker, "marker")
  const handleSelectMarker = useCallback((...args: any) => {
    console.log("test,area", area)
    if (!area) return
    setMarker([...args])
    setModalPage(3)
    setIsSelectingPanel(false)
    setIsModalOpen(true)


  }, [markable, area, isSelectingPanel, isModalOpen])
  console.log("marker main", isSelectingPanel)
  return (
    <div>
      {isModalOpen && <CollectDataModal setIsModalOpen={setIsModalOpen} setIsSelectingPanel={setIsSelectingPanel} modalPage={modalPage} setModalPage={setModalPage} setMarkable={setMarkable} />}
      <MapComponent createArea={createArea} area={area} markable={markable} marker={marker} setMarker={handleSelectMarker} />
    </div>
  )
}

export default MainPage
