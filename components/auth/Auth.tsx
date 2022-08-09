import styled from "@emotion/styled";
import { useState } from "react";
import LoginComponent from "./Login";
import SignUpComponent from "./SignUp";

export default function AuthComponent() {
  const [menu, setMenu] = useState(0);

  const onClickMenu = (value: number) => () => {
    setMenu(value);
  };

  return (
    <AuthWrapperDiv>
      <MenuTapUl>
        <li onClick={onClickMenu(0)}>로그인</li>
        <li onClick={onClickMenu(1)}>회원가입</li>
      </MenuTapUl>
      {menu === 0 && <LoginComponent />}
      {menu === 1 && <SignUpComponent />}
    </AuthWrapperDiv>
  );
}

const AuthWrapperDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 20px;
`;

const MenuTapUl = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  li {
    font-size: 1.4rem;
    border: 1px solid black;
    border-radius: 10px;

    padding: 10px;

    cursor: pointer;
  }
`;
