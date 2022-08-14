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
            Snapshot:kDIMU1ZfYgOqCXET3w4SJA5cBjv87zipruLKQGdRPx0m29ayFHheNon6sWVtlbicl9fHlMUjcaPXoRZz8TUgqSdrlHDObPIw2wD5
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
              Generated At
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
              Providers
            </Typography>
            <Box sx={{ border: 2, borderColor: "divider", padding: 2 }}>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{
                  wordBreak: "break-word",
                }}
              >
                kDIMU1ZfYgOqCXET3w4SJA5cBjv87zipruLKQGdRPx0m29ayFHheNon6sWVtlbicl9fHlMUjcaPXoRZz8TUgqSdrlHDObPIw2wD5
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
          </Box>
        </Grid>
        <Divider orientation="vertical" flexItem></Divider>
        <Grid item xs={8}>
          <Box
            style={{
              padding: 24,
            }}
          >
            <Typography gutterBottom variant="h6" component="p">
              CID List
            </Typography>

            <Box
              sx={{
                border: 2,
                borderColor: "divider",
                padding: 2,
              }}
            >
              <Typography gutterBottom variant="h6" component="p">
                Provider ID
              </Typography>
              <Box
                sx={{
                  border: 2,
                  borderColor: "divider",
                  padding: 2,
                }}
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{
                    wordBreak: "break-word",
                  }}
                >
                  kDIMU1ZfYgOqCXET3w4SJA5cBjv87zipruLKQGdRPx0m29ayFHheNon6sWVtlbicl9fHlMUjcaPXoRZz8TUgqSdrlHDObPIw2wD5
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
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Provider;
