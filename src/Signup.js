import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const username = React.useRef(null);
  const nickname = React.useRef(null);
  const password = React.useRef(null);
  const passwordCheck = React.useRef(null);

  const signUp = () => {
    axios.post("http://13.209.65.84:8080/user/signup", 
    { username: username.current.value,
      nickname: nickname.current.value,
      password: password.current.value,
      passwordCheck: passwordCheck.current.value}
    ).then((response) => {
      console.log(response)
      window.alert("회원가입에 성공했습니다!")
      navigate("/login")
      //if로 성공 or 실패 핸들링 
    }).catch(error => {
      console.log(error.response.data.message)
      if(error.response.data.status == 400) {window.alert(error.response.data.message)}

    })
  


    // navigate("/login");
  };

  const names = useSelector((state) => state.Name.list);
  console.log(names);


  return (
    <Box>
      <Container>
        <h2 style={{ color: "#004dcf" }}>회원가입</h2> <br />
        <div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <input
              type="text"
              ref={nickname}
              placeholder="닉네임을 입력해주세요."
              style={{
                margin: "10px 5px 10px 5px",
                padding: "3px",
                display: "block",
                width: "200px",
                height: "25px",
                border: "1px solid #d9d9d9",
                borderRadius: "3px",
              }}
            />
            <button
              style={{
                border: "1px solid #f1f3f4",
                height: "30px",
                margin: "auto 0",
                borderRadius: "3px",
              }}
            >
              중복확인
            </button>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <input
              type="text"
              ref={username}
              placeholder="ID를 입력해주세요."
              style={{
                margin: "10px 5px 10px 5px",
                padding: "3px",
                display: "block",
                width: "200px",
                height: "25px",
                border: "1px solid #d9d9d9",
                borderRadius: "3px",
              }}
            />
            <button
              style={{
                border: "1px solid #f1f3f4",
                height: "30px",
                margin: "auto 0",
                borderRadius: "3px",
              }}
            >
              중복확인
            </button>
          </div>
          <input
            type="password"
            ref={password}
            placeholder="PW를 입력해주세요."
            style={{
              margin: "10px 0px 20px 5px",
              padding: "3px",
              display: "block",
              width: "200px",
              height: "25px",
              border: "1px solid #d9d9d9",
              borderRadius: "3px",
            }}
          />
          <input
            type="password"
            ref={passwordCheck}
            placeholder="PW를 다시 입력해주세요."
            style={{
              margin: "10px 0px 10px 5px",
              padding: "3px",
              display: "block",
              width: "200px",
              height: "25px",
              border: "1px solid #d9d9d9",
              borderRadius: "3px",
            }}
          />
        </div>
        <div>

          <Button onClick={signUp} >회원가입</Button>
        </div>
      </Container>
    </Box>
  );
};

const Box = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  border: 1px solid lightgray;
  width: 400px;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const Button = styled.button`
  background-color: #f1f3f4;
  border: none;
  border-radius: 20px;
  font-family: Apple SD Gothic Neo, arial, sans-serif;
  font-size: 15px;
  margin: 0px 3px;
  padding: 0 16px;
  line-height: 27px;
  height: 36px;
  min-width: 54px;
  text-align: center;
  cursor: pointer;
  user-select: none;
  margin-top: 20px;
`;

export default Signup;