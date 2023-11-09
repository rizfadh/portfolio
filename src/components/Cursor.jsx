import { useEffect } from 'react'
import { useState } from 'react'

export default function Cursor() {
    const size = 100
    const [top, setTop] = useState(0)
    const [left, setLeft] = useState(0)

    useEffect(() => {
        const mouseMove = (e) => {
            setTop(e.clientY - size / 2)
            setLeft(e.clientX - size / 2)
        }

        document.addEventListener('mousemove', mouseMove)
    }, [])

    if (top === 0 && left === 0) return null

    return (
        <span
            className='position-fixed bg-primary z-n1 d-none d-lg-inline rounded-circle border border-1 border-dark'
            style={{
                width: `${size}px`,
                height: `${size}px`,
                top: top,
                left: left,
            }}
        ></span>
    )
}
