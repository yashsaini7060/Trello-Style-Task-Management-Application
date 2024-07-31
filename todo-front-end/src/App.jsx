import { useEffect } from "react"
import { toast } from "react-hot-toast"
function App() {
  useEffect(() => {
    toast.error("hello")
    console.log("toast not working")
  })
  return (
    <>
      <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
    </>
  )
}

export default App
