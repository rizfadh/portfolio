import { Outlet } from 'react-router-dom'

function Diary() {
    return (
        <article>
            <section>
                <div className='container py-5'>
                    <Outlet />
                </div>
            </section>
        </article>
    )
}

export default Diary
