import {
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  InputBase,
  Stack,
  Typography,
} from "@mui/material";
import { ArchiveBox, CircleDashed, MagnifyingGlass } from "phosphor-react";
import { styled, alpha } from "@mui/material/styles";
import { ChatList } from "../../data";
import { SimpleBarStyle } from "../../components/Scrollbar";
import { useTheme } from "@emotion/react";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 3,
    top: 22,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 3px",
  },
}));
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 20,
  backgroundColor: alpha(theme.palette.background.default, 1),
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
  },
}));
const ChatElement = (ChatData) => {
  let theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: 1,
        backgroundColor:
          theme.palette.mode === "light"
            ? "#f8faff"
            : theme.palette.background.default,
      }}
      p={1}
    >
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Stack direction={"row"} spacing={3} alignItems={"center"}>
          {ChatData.online ? (
            <StyledBadge
              badgeContent={""}
              color="secondary"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              variant="dot"
            >
              <Avatar src={ChatData.img} />
            </StyledBadge>
          ) : (
            <StyledBadge>
              <Avatar src={ChatData.img} />
            </StyledBadge>
          )}

          <Stack spacing={0.3}>
            <Typography variant="subtitle2">{ChatData.name}</Typography>
            <Typography variant="subtitle1" sx={{ fontSize: 15 }}>
              {ChatData.msg}
            </Typography>
          </Stack>
        </Stack>
        <Stack alignItems={"center"} spacing={1.5}>
          <Typography sx={{ fontWeight: 600, fontSize: 15 }} variant="caption">
            {ChatData.time}
          </Typography>
          <Badge
            color="primary"
            badgeContent={ChatData.unread ? ChatData.unread : "0"}
          ></Badge>
        </Stack>
      </Stack>
    </Box>
  );
};

const Chat = () => {
  let theme = useTheme();
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        width: 320,
        backgroundColor:
          theme.palette.mode === "light"
            ? "#f8faff"
            : theme.palette.background.paper,
        boxShadow: "0 0 2px rgba(0,0,0,0.25)",
      }}
    >
      <Stack p={2} spacing={3} sx={{ height: "100vh" }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems={"center"}
        >
          <Typography variant="h3">Chart</Typography>
          <IconButton>
            <CircleDashed />
          </IconButton>
        </Stack>
        <Stack sx={{ width: "100%" }}>
          <Search>
            <SearchIconWrapper>
              <MagnifyingGlass color="#709ce6" />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search..."
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Stack>
        <Stack spacing={2}>
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <ArchiveBox size={24} />
            <Button>Archive</Button>
          </Stack>
          <Divider />
        </Stack>
        <Stack
          spacing={2}
          sx={{ flexGrow: 1, overflow: "scroll", height: "100%" }}
        >
          <SimpleBarStyle timeout={500} clickOnTrack={false}>
            <Stack spacing={2.5}>
              <Typography variant="subtitle2" sx={{ color: "#676767" }}>
                Pinned
              </Typography>
              {ChatList &&
                ChatList.filter((item, index) => {
                  return item.pinned;
                }).map((item, index) => {
                  return <ChatElement {...item} key={`Chat-${index}`} />;
                })}
            </Stack>
            <Stack spacing={2.5}>
              <Typography variant="subtitle2" sx={{ color: "#676767" }}>
                All chat
              </Typography>
              {ChatList &&
                ChatList.map((item, index) => {
                  return <ChatElement {...item} key={`Chat-${index}`} />;
                })}
            </Stack>
          </SimpleBarStyle>
        </Stack>
      </Stack>
    </Box>
  );
};
export default Chat;
