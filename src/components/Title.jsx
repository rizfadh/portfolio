export default function Title({ children, className }) {
    return (
        <h2 className={`display-5 fw-bolder text-center text-lg-start ${className}`}>
            {children}
        </h2>
    )
}