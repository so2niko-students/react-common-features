import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Main from "./pages/main";
import Preview from "./pages/preview";
import Stream from "./pages/stream";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Main</Link>
        <Link to="/preview">Preview</Link>
        <Link to="/stream">Stream</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/stream" element={<Stream />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;