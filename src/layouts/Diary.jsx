import { Outlet, useOutletContext } from 'react-router-dom'

function Diary() {
    const context = useOutletContext()

    return (
        <article>
            <section>
                <div className='container'>
                    <Outlet context={context} />
                </div>
            </section>
        </article>
    )
}

export default Diary
