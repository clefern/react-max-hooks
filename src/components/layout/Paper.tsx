import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import React from "react";

//notice the syntax
const StyledPaper = styled(Paper, {
  name: "StyledPaper",
  slot: "Wrapper",
})({
  color: "#6B8068",
  //backgroundImage: `url("https://picsum.photos/200/300")`,
  backgroundColor: "silver",
  margin: "auto",
  borderRadius: 2,
  height: 300,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  ".MuiButton-root": { color: "#FF0000" },
});

//Tick mark syntax also works
const StyledPaper2 = styled(Paper, {
  name: "StyledPaper2",
  slot: "Wrapper",
})`
  color: red;
  height: 300px;
  background-image: url("https://picsum.photos/200/300");
`;

export default function MuiPaper() {
  return (
    <>
      <StyledPaper>
        <Button variant="outlined">Text</Button>
      </StyledPaper>
      <StyledPaper2>Text</StyledPaper2>
    </>
  );
}
