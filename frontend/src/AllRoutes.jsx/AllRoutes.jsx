import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home/Home'
import EditPage from '../Components/Edit Page/EditPage'
// import AllUser from '../pages/AllUser'
// import AssignSprints from '../pages/AssignSprints'
// import AssignTasks from '../pages/AssignTasks'
// import Auth from '../pages/Auth'
// import Dashboard from '../pages/Dashboard'
// import Report from '../pages/Report'
// import SingleSprintPage from '../pages/SingleSprintPage'
// import Tasks from '../pages/Tasks'


const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/edit' element={<EditPage />}></Route>
            {/* <Route path='/edit' element={<EditPage />}></Route> */}
        </Routes>
    )
}

export default AllRoutes