import { FaSun, FaMoon } from "react-icons/fa"

export default function NavBar({ darkModeValue, darkModeChange }) {
    return (
        <nav className="navbar sticky-top py-3">
            <div className="container">
                <div className="w-100 d-flex align-items-center px-3 py-2 justify-content-between bg-body-tertiary rounded shadow-sm">
                    <div>
                        <h1 className="navbar-brand fs-4 m-0 font-script text-primary">Rizky&apos;s Portfolio</h1>
                    </div>
                    <div>
                        <button
                            type="button"
                            className="d-flex btn fs-3 text-primary border-0"
                            onClick={ darkModeChange }
                        >
                            { darkModeValue === "light" ? <FaSun/> : <FaMoon/> }
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}