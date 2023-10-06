import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom'
import Portfolio from './layouts/Portfolio'
import Diary from './layouts/Diary'
import DiaryDetail from './components/DiaryDetail'
import Root from './layouts/Root'
import DiaryList from './components/DiaryList'
import { getDiaries, getDiary } from '../utils/api'
import NotFound from './layouts/NotFound'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Root />}>
            <Route index element={<Portfolio />} />
            <Route path='diary' element={<Diary />}>
                <Route index element={<DiaryList />} loader={getDiaries} />
                <Route path=':id' element={<DiaryDetail />} loader={getDiary} />
            </Route>
            <Route path='*' element={<NotFound />} />
        </Route>
    )
)

function App() {
    return <RouterProvider router={router} />
}

export default App
