import styled from "@emotion/styled";
import { ChangeEvent, useState } from "react";

export default function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onChangeEmail(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function onChangePassword(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  function onClickLogin() {
    if (!email.includes("@" && ".")) {
      alert("이메일형식에 맞지 않습니다.");
      return;
    }
    console.log(email, password);
  }

  return (
    <LoginWrapperDiv>
      <div>
        이메일
        <input type="text" onChange={onChangeEmail} />
      </div>
      <div>
        비밀번호
        <input type="password" onChange={onChangePassword} />
      </div>
      <button onClick={onClickLogin}>로그인</button>
    </LoginWrapperDiv>
  );
}

const LoginWrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 10px;

  div {
    min-width: 220px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  button {
    width: 100%;
  }
`;
