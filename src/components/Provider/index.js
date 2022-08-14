import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { Grid, Divider } from "@mui/material";
import { Box } from "@mui/system";
import Chart from "../Chart/Provider";

import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
const Provider = ({ onClose }) => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={onClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="p">
            Provider:Dealbot
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid
        container
        style={{
          height: "100%",
          flexWrap: "nowrap",
        }}
      >
        <Grid item xs={4} height="100%">
          <Box
            style={{
              height: "100%",
              padding: 24,
            }}
          >
            <Typography gutterBottom variant="h6" component="p">
              Peer ID
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{
                wordBreak: "break-word",
              }}
            >
              kDIMU1ZfYgOqCXET3w4SJA5cBjv87zipruLKQGdRPx0m29ayFHheNon6sWVtlbicl9fHlMUjcaPXoRZz8TUgqSdrlHDObPIw2wD5
            </Typography>
            <Divider></Divider>

            <Typography gutterBottom variant="h6" component="p">
              Multi Address
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{
                wordBreak: "break-word",
              }}
            >
              /ip4/136.144.57.12/tcp/4001
            </Typography>
            <Divider></Divider>

            <Typography gutterBottom variant="h6" component="p">
              Last Sync At
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{
                wordBreak: "break-word",
              }}
            >
              2022-07-01 22:22:22
            </Typography>

            <Divider></Divider>
            <Typography gutterBottom variant="h6" component="p">
              Data Head CID
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{
                wordBreak: "break-word",
              }}
            >
              kDIMU1ZfYgOqCXET3w4SJA5cBjv87zipruLKQGdRPx0m29ayFHheNon6sWVtlbicl9fHlMUjcaPXoRZz8TUgqSdrlHDObPIw2wD5
            </Typography>
          </Box>
        </Grid>
        <Divider orientation="vertical" flexItem></Divider>
        <Grid item xs={8}>
          <Box
            style={{
              padding: 24,
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Tabs value={value} onChange={handleChange}>
                <Tab value="1" label="Notifications" />
                <Tab value="2" label="DAGS" />
              </Tabs>
              <Chart />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Provider;
