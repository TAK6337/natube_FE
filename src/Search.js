import React from 'react'
// import { Button } from '@mui/material';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";



const Search = (onChange) => {
  const navigate = useNavigate();

  return (
    <>
      {/* <div
        className="App"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "180px",
        }}
      >
                <div
          style={{
            width: "35vw",
            height: "40vh",
            display: "flex",
            flexDirection: "column",
          }}
        > */}
       <div className="Blank"
       style={{
        width: "62vw",
        display: "flex",
        flexFlow: "row-nowrap",
        justifyContent: "flex-end",
        
       }}
>
       <Button onClick={() => {
  navigate("/Login");
}}>글쓰기</Button>

<Button onClick={() => {
  navigate("/Signup")
}}>로그아웃
</Button>
</div>

<div
        className="App"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "18px",
        }}
      >
                <div
          style={{
            width: "35vw",
            height: "40vh",
            display: "flex",
            flexDirection: "column",
          }}
        >

      {/* <Button variant="contained">Contained</Button> */}
      <img className="natubeImage" alt="natube" src="image/나투브.png"
        style={{
          width: "30vw",
          height: "30vh",
          margin: "20px"
          
        }} />
        			
{/*               
              <button type="button"  style={{
               position: "relative",
               right: "30em",
               bottom: "23em"
              }}>Login</button>
              <button type="button"  style={{
               position: "relative",
               right: "15.5em",
               bottom: "23em"
               }}>Signup</button> */}


{/* <Button onClick={() => {
  navigate("/Login");
}}>로그인</Button>

<Button onClick={() => {
  navigate("/Signup")
}}>회원가입
</Button> */}


<div className="bar">

<input type="search" 
placeholder="검색해라"
onChange={onChange}
style={{
  width: "33.6vw",
  height: "2.3vh",
  borderRadius: "16px",
  borderWidth: "1px",
  padding: "6px",
  margin: "2px 90px 2px 2px",
  fontSize: "16px"
}}/>
{/* <button class="search-icon" onClick="" */}
</div>
</div>
</div>
    </>


  );

}

const Button = styled.div`
background-color: white;
border: 1px solid white;
color: #3c4043;
font-size: 15px;
line-height: 27px;
text-align: center;
cursor: pointer;
user-select: none;
margin: 5px;


`;



export default Search;