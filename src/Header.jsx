import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Pokemon from "./compornents/Pokemon";
import Edamam from "./compornents/Edamam";
import Beer from "./compornents/Beer";

import styled from "styled-components";

const Nav = styled.ul`
  /* display: flex;
  list-style: none;
  height: 100px;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    90deg,
    rgba(226, 207, 255, 1),
    rgba(251, 253, 191, 1)
  );
  li {
    padding-left: 70px;
  } */
`;

const Links = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  font-family: monospace;
  color: purple;
`;

const Header = () => {
  return (
    <BrowserRouter>
      <div>
        <Nav>
          <li>
            <Links to="/Pokemon">ポケモン一覧</Links>
          </li>
          <li>
            <Links to="/Edamam">レシピ検索</Links>
          </li>
          <li>
            <Links to="/Beer">ビール購入</Links>
          </li>
        </Nav>
        <Routes>
          <Route path={`/Pokemon`} element={<Pokemon />} />
          <Route path={`/Edamam`} element={<Edamam />} />
          <Route path={`/Beer`} element={<Beer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Header;
