import { faker } from "@faker-js/faker";
import {
  Avatar,
  Badge,
  Box,
  Divider,
  IconButton,
  InputAdornment,
  Stack,
  styled,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import {
  CaretDown,
  LinkSimple,
  MagnifyingGlass,
  PaperPlaneTilt,
  Phone,
  Smiley,
  VideoCamera,
} from "phosphor-react";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 3,
    top: 22,
    // border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 3px",
  },
}));
const StyledInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    paddingTop: "12px",
    paddingBottom: "12px",
  },
}));
const Conversation = () => {
  let theme = useTheme();

  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      {/* header */}
      <Box
        sx={{
          width: "100%",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#f8faff"
              : theme.palette.background.paper,
          boxShadow: "0 0 2px rgba(0,0,0,025)",
        }}
        p={2}
      >
        <Stack
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{ width: "100%", height: "100%" }}
          direction={"row"}
        >
          <Stack spacing={2} alignItems={"center"} direction={"row"}>
            <Box>
              <StyledBadge
                badgeContent={""}
                variant="dot"
                color="secondary"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
              >
                <Avatar src={faker.image.avatar()} />
              </StyledBadge>
            </Box>
            <Stack spacing={0.2}>
              <Typography
                variant="subtitle2"
                sx={{
                  color:
                    theme.palette.mode === "light"
                      ? "black"
                      : theme.palette.primary,
                }}
              >
                {faker.name.fullName()}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color:
                    theme.palette.mode === "light"
                      ? "black"
                      : theme.palette.primary,
                }}
              >
                Online
              </Typography>
            </Stack>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} spacing={3}>
            <IconButton>
              <VideoCamera></VideoCamera>
            </IconButton>
            <IconButton>
              <Phone></Phone>
            </IconButton>
            <IconButton>
              <MagnifyingGlass></MagnifyingGlass>
            </IconButton>
            <Divider orientation="vertical" flexItem />
            <IconButton>
              <CaretDown />
            </IconButton>
          </Stack>
        </Stack>
      </Box>
      {/* mess */}
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor:
            theme.palette.mode === "light"
              ? "#ffffff"
              : theme.palette.background.default,
        }}
        width={"100%"}
      ></Box>
      {/* chat footer */}
      <Box
        p={2}
        sx={{
          width: "100%",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#f8faff"
              : theme.palette.background.paper,
          boxShadow: "0 0 2px rgba(0,0,0,025)",
        }}
      >
        <Stack direction={"row"} alignItems={"center"} spacing={3}>
          <StyledInput
            fullWidth
            placeholder="Write something...."
            variant="filled"
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment>
                  <IconButton>
                    <LinkSimple />
                  </IconButton>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <Smiley />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Box
            sx={{
              height: 48,
              width: 48,
              backgroundColor: theme.palette.primary.main,
              borderRadius: 1.5,
            }}
          >
            <Stack
              alignItems={"center"}
              justifyContent={"center"}
              sx={{ height: "100%", width: "100%" }}
            >
              <IconButton>
                <PaperPlaneTilt color="#fff" />
              </IconButton>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};
export default Conversation;
