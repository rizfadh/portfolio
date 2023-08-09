import { FaSun, FaMoon } from "react-icons/fa"

export default function DarkModeButton({ darkModeValue, darkModeChange }) {
    return (
        <div className="position-fixed z-3 bg-primary top-0 end-0 me-4 rounded-bottom-2 py-3 px-1 shadow">
            <button
                type="button"
                className="d-flex btn text-light border-0 fs-2"
                onClick={ darkModeChange }
            >
                { darkModeValue === "light" ? <FaSun/> : <FaMoon/> }
            </button>
        </div>
    )
}