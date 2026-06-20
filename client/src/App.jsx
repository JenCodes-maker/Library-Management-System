import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Books from "./pages/Books";
import AddBook from "./pages/AddBook";
import Members from "./pages/Members";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import IssueReturn from "./pages/IssueReturn";
import AddMember from "./pages/AddMember";
import EditBook from "./pages/EditBook";
function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/books" element={<Books />} />

        <Route path="/add-book" element={<AddBook />} />
        <Route path="/members" element={<Members />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/issue-return" element={<IssueReturn />} />
        <Route path="/add-member" element={<AddMember />} />
        <Route path="/edit-book/:id" element={<EditBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;