import React from "react";
import Chat from "./Chat";
import { Stack, Box } from "@mui/material";
import Conversation from "../../components/Conversation";

// import { Suspense, lazy } from "react";
// const Cat = lazy(() => import("../../components/Cat"));
const GeneralApp = () => {
  return (
    <Stack direction="row" sx={{ width: "100%" }}>
      <Chat />
      <Box
        sx={{
          height: "100%",
          width: "calc(100vw - 420px)",
          background: "#fff",
        }}
      >
        <Conversation />
      </Box>
    </Stack>
  );
};

export default GeneralApp;
