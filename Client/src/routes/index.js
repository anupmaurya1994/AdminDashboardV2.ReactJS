import React, {Suspense} from "react"
import { Navigate } from "react-router-dom"

//editor
import Editor from "../pages/Editor/CodeEditor";

// Profile
import UserProfile from "../pages/Authentication/user-profile"

//calendar
// import Calendar from "../pages/Calendar/index";
const Calendar = React.lazy(() => import('../pages/Calendar/index'));


//form
// import FormLayouts from "../pages/Forms/FormLayouts";
const FormLayouts = React.lazy(() => import('../pages/Forms/FormLayouts'));


//table
import BasicTables from "../pages/Tables/BasicTables";
import DatatableTables from "../pages/Tables/DatatableTables";


// Authentication related pages
import Login from "../pages/Authentication/Login"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"
import Logout from "../pages/Authentication/Logout"

// Dashboard
import Dashboard from "../pages/Dashboard/index"
import Layout3 from "pages/Layout3/Layout3"

// const Dashboard = React.lazy(() => import('../pages/Dashboard/index'));

const authProtectedRoutes = [

  
  { path: "/dashboard", component: <Dashboard/> },
 
  //editor
  { path: "/editor", component: <Editor/>},

  // //profile
  { path: "/profile", component: <UserProfile/> },

  //calendar
  { path: "/calendar", component: <Suspense fallback={<p style={{zIndex:"1000", fontSize:"50px", margin:"100px" }}>Loading...</p>}> <Calendar/> </Suspense>},

  //form
  { path: "/form-layouts", component:<Suspense fallback={<p style={{zIndex:"1000", fontSize:"50px", margin:"100px" }}>Loading...</p>}>  <FormLayouts/> </Suspense> },

   // Tables
   { path: "/tables-basic", component: <BasicTables/> },
   { path: "/tables-datatable", component: <DatatableTables/> },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
   {
    path: "/",
    exact: true,
    component: < Navigate to="/dashboard" />,
  },
]

const publicRoutes = [
  { path: "/logout", component: <Logout /> },
  { path: "/login", component: <Login /> },
  { path: "/forgot-password", component: <ForgetPwd /> },
  { path: "/register", component: <Register /> },
  { path: "/landingpage", component: <Layout3 /> },
]

export { authProtectedRoutes, publicRoutes }

