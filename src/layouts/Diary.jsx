import { Outlet } from 'react-router-dom'

function Diary() {
    return (
        <article>
            <section>
                <div className='container'>
                    <Outlet />
                </div>
            </section>
        </article>
    )
}

export default Diary
