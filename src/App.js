import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import SignInWithGoogle from './components/SignInWithGoogle';
import Chat from './components/Chat';
import Courses from './components/Courses';
import Scholarship from './components/scholarship';
import Sidebar from './components/Sidebar';
import { useEffect, useState } from 'react';
import { auth } from './components/firebase'; // Firebase initialized
import './styles.css';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  const handleLogout = () => {
    auth.signOut()
      .then(() => {
        console.log("User signed out.");
        setUser(null);
      })
      .catch((error) => {
        console.error("Logout Error:", error);
      });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/chat" /> : <Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/google" element={<SignInWithGoogle />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/scholarship" element={<Scholarship/>} />
        <Route
          path="/chat"
          element={
            user ? (
              <>
                <Sidebar user={user} onLogout={handleLogout} />
                <Chat />
              </>
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
}


export default App;
