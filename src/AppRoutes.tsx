import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layouts/layout";
import HomePage from "./pages/HomePage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";
import ManageRestaurantpage from "./pages/ManageRestaurantPage"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout showhero ><HomePage/></Layout>}/>
      <Route path="/auth-callback" element={<AuthCallbackPage/>}/>
      <Route element={<ProtectedRoute/>}>
        <Route path="/user-profile" element={<Layout ><UserProfilePage/></Layout>}/>
        <Route path="/manage-restaurant" element={<Layout ><ManageRestaurantpage/></Layout>}/>
      </Route>
      <Route path="*" element={<Navigate to={"/"}/>}/>
    </Routes>
  )
}
export default AppRoutes
