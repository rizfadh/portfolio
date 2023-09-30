import { FaBootstrap, FaReact } from "react-icons/fa";

export default function Footer() {
    return (
        <footer>
            <div className="container py-4">
                <div className="text-center">
                    Built with <span className="fs-3"><FaReact/></span> and <span className="fs-3"><FaBootstrap/></span> by Muhammad Rizky Fadhillah &copy; 2023
                </div>
            </div>
        </footer>
    )
}