import { useState } from "react"
import "./welcome.css"

export const Welcome = () => {
  const [show, setShow] = useState(true)

  if (!show) return null

  return (
    <div className="welcome-wrapper">
      <div className="welcome-card">
        <p>Welcome 👋 خوش اومدی</p>
        <button
          className="close-btn"
          onClick={() => setShow(false)}
        >
          ×
        </button>
      </div>
    </div>
  )
}
