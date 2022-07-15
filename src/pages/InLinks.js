import { Box, Container, Paper } from "@mui/material";
import React from "react";
import TabsPages from "./TabsPages";
import { styled } from "@mui/material/styles";

const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));

export default function InLinks() {
  return (
    <div>
      <Container>
        <Box sx={{ marginTop: 10 }}>
          <Div>{"Links"}</Div>
          <Paper
            width={"80%"}
            height={80}
            elevation={5}
            sx={{ display: "flex", justifyContent: "center", padding: 5 }}
          >
            <TabsPages />
          </Paper>
        </Box>
      </Container>
    </div>
  );
}
