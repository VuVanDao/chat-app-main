import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Switch,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import logo from "../../assets/Images/logo.ico";
import { Nav_Buttons } from "../../data";
import { Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";
import useSettings from "../../hooks/useSettings";
const DashboardLayout = () => {
  const theme = useTheme();
  console.log(">>>", theme);
  let [selectedButton, setSelectedButton] = useState(0);
  let { onToggleMode } = useSettings();
  return (
    <>
      <Box
        sx={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0 0 2px rgba(0,0,0,0.25)",
          height: "100vh",
          width: 100,
          color: "white",
        }}
        p={2}
      >
        <Stack
          direction="column"
          alignItems="center"
          sx={{ height: "100%" }}
          spacing={2}
          justifyContent={"space-between"}
        >
          <Stack alignItems={"center"} spacing={4}>
            <Box
              sx={{
                backgroundColor: theme.palette.primary.main,
                height: 64,
                width: 64,
                borderRadius: 1.5,
              }}
            >
              <img src={logo} alt={"logo"} />
            </Box>
            <Stack
              spacing={3}
              sx={{ width: "max-content" }}
              alignItems={"center"}
            >
              {Nav_Buttons &&
                Nav_Buttons.length > 0 &&
                Nav_Buttons.map((item) => {
                  return item.index === selectedButton ? (
                    <Box
                      key={`iconButton-${item.index}`}
                      sx={{
                        backgroundColor: theme.palette.primary.main,
                        borderRadius: 1.5,
                      }}
                    >
                      <IconButton
                        sx={{ width: "max-content", color: "#fff" }}
                        onClick={() => setSelectedButton(item.index)}
                      >
                        {item.icon}
                      </IconButton>
                    </Box>
                  ) : (
                    <Box
                      key={`iconButton-${item.index}`}
                      sx={{
                        borderRadius: 1.5,
                      }}
                    >
                      <IconButton
                        sx={{
                          width: "max-content",
                          color:
                            theme.palette.mode === "light"
                              ? "#000"
                              : theme.palette.text.primary,
                        }}
                        onClick={() => setSelectedButton(item.index)}
                      >
                        {item.icon}
                      </IconButton>
                    </Box>
                  );
                })}
              <Divider sx={{ width: 48 }} />
              {selectedButton === 3 ? (
                <Box
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                >
                  <IconButton
                    sx={{ width: "max-content", color: "#fff" }}
                    onClick={() => setSelectedButton(3)}
                  >
                    <Gear />
                  </IconButton>
                </Box>
              ) : (
                <Box>
                  <IconButton
                    sx={{
                      width: "max-content",
                      color:
                        theme.palette.mode === "light"
                          ? "#000"
                          : theme.palette.text.primary,
                    }}
                    onClick={() => setSelectedButton(3)}
                  >
                    <Gear />
                  </IconButton>
                </Box>
              )}
            </Stack>
          </Stack>
          <Stack alignItems={"center"} spacing={2}>
            <Switch defaultChecked onChange={() => onToggleMode()} />
            <Avatar src={faker.image.avatar()} />
          </Stack>
        </Stack>
      </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
