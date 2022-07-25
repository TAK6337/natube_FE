import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Container>
        <h2 style={{ color: "#004dcf" }}>로그인</h2> <br />
        <div>
          <p style={{ color: "#004dcf" }} >ID</p>
          <input
            type="text"
            style={{
              margin: "0px 0px 10px 5px",
              padding: "3px",
              display: "block",
              width: "250px",
              height: "25px",
              border: "1px solid #d9d9d9",
              borderRadius: "3px",
            }}
          />
          <p style={{ color: "#004dcf" }} >PW</p>
          <input
            type="password"
            style={{
              margin: "10px 0px 10px 5px",
              padding: "3px",
              display: "block",
              width: "250px",
              height: "25px",
              border: "1px solid #d9d9d9",
              borderRadius: "3px",
            }}
          />
        </div>
        <div>
          <Button
            onClick={() => {
              navigate("/api/search/:keyword");
            }}
          >
            로그인
          </Button>
          <Button
            onClick={() => {
              navigate("/user/signup");
            }}
          >
            회원가입
          </Button>
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
  height: 420px;
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

export default Login;
