import React, { useEffect, useState } from "react";
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
import dayjs from "dayjs";
const Provider = ({ onClose, snapshot }) => {
  const [value, setValue] = React.useState("1");
  const [selectedProvider, setSelectedProvider] = useState();
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
            Snapshot:{snapshot?.PrevSnapShot}
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
              {snapshot?.CreateTime
                ? dayjs(snapshot?.CreateTime / 1000 / 1000).format(
                    "YYYY-MM-DD HH:mm:ss"
                  )
                : "-"}
            </Typography>
            <Divider></Divider>

            <Typography gutterBottom variant="h6" component="p">
              Providers
            </Typography>
            <Box sx={{ border: 2, borderColor: "divider", padding: 2 }}>
              {Object.keys(snapshot?.Update || {}).map((key) => {
                return (
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{
                      wordBreak: "break-word",
                      opacity: selectedProvider?.key === key ? 0.3 : 1,
                    }}
                    onClick={() => {
                      setSelectedProvider({
                        key,
                        value: snapshot?.Update[key],
                      });
                    }}
                  >
                    <a
                      key={key}
                      href="#1"
                      color="text.secondary"
                      style={{
                        color: "rgba(0, 0, 0, 0.6)",
                      }}
                    >
                      {key}
                    </a>
                  </Typography>
                );
              })}
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
                {selectedProvider?.value?.MetaList?.map((item, index) => {
                  return (
                    <Typography
                      key={index}
                      variant="body2"
                      color="text.secondary"
                      style={{
                        wordBreak: "break-word",
                      }}
                    >
                      {item?.["/"]}
                    </Typography>
                  );
                })}
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Provider;
