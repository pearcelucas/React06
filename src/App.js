import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Cursos} from "./Pages/Cursos";
import {Contato} from "./Pages/Contato";
import {Menu} from "./Pages/Menu";
import {Home} from "./Pages/Home";
import {Error} from "./Pages/Page404";
import {Detalhes} from "./Pages/Detalhes";

function App() {
  return (
    <>
      <BrowserRouter>
      <Menu/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="detalhes/:id" element={<Detalhes/>}/>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
