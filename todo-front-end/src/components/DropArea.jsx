import { useState } from "react"

// eslint-disable-next-line react/prop-types
function DropArea({ onDrop }) {
  const [isVisible, setIsVibsible] = useState(false)
  
  const showArea =() => {
    setIsVibsible(true)
  }

  const hideArea = () => {
    setIsVibsible(false)
  }

  return (
    <div className={`h-2 bg-[#F7F7F7] transition-[padding, opacity] relative before:absolute before:inset-2 before:roundex-xl before:border-2 before:border-dashed before:border-grey-600 ${isVisible ? "py-24  opacity-100" : "opacity-0"}`} 
    onDragEnter={showArea} 
    onDragLeave={hideArea}
    onDrop ={() => {
      onDrop();
      hideArea();
    } }
    onDragOver={(e) => e.preventDefault()}
    ></div>
  )
}

export default DropArea