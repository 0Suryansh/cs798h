import './App.css';
import WatchParty from './pages/WatchParty.jsx';
import WatchPartyChat from './pages/WatchPartyChat.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WatchParty />} />
          <Route path="/chats" element={<WatchPartyChat />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
