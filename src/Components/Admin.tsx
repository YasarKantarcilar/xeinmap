import { Link } from "react-router-dom"

const Admin = () => {
  const reqs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  return (
    <div className="w-full min-h-screen mt-20 gap-8 px-[10%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      <Link to={"/"} className="fixed top-5 left-5 border-2 rounded-xl shadow-xl px-8 py-4">MAP</Link>
      {reqs.map((req: number) => (
        <div className="aspect-square shadow-xl border-2">
          <div className="w-full h-2/3 flex justify-center items-center">
            <button className="border-2 rounded-xl px-8 py-2">MAP</button>
          </div>
          <div className="flex flex-1 justify-center flex-col items-center gap-4">
            <p className="text-base">Yaşar Kantarcılar</p>
            <p className="text-base">Kantarcılaryasar@gmail.com</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Admin
