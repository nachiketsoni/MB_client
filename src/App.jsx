import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login.jsx";
import Signup from "./components/SignUp.jsx";
import Todo from "./components/Todo.jsx"; // Create a simple Todo component or mock
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Cart from "./components/Cart.jsx";
import Success from "./components/Success.jsx";
import Failed from "./components/Failed.jsx";
import Orders from "./components/Orders.jsx";

const App = () => {
   const  handleTaskClick = (data)=>{
    console.log(data)
   }
  return (

    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/todo"
        element={
          <ProtectedRoute>
            <Todo handleTaskClick={handleTaskClick} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }
      />
      <Route
        path="/success"
        element={
          <ProtectedRoute>
            <Success />
          </ProtectedRoute>
        }
      />
      <Route
        path="/failed"
        element={
          <ProtectedRoute>
            <Failed />
          </ProtectedRoute>
        }
      />
      <Route
        path="/myorders"
        element={
          <ProtectedRoute>
            <Orders />
          </ProtectedRoute>
        }
      />
      {/* Add a default route or catch-all */}
      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default App;
