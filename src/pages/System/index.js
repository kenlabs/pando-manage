import React from "react";
import Typography from "@mui/material/Typography";
import { Grid, Divider } from "@mui/material";
import { Box } from "@mui/system";
import Chart from "../../components/Chart/Provider";
import Page from "material-ui-shell/lib/containers/Page";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
const Provider = ({ onClose }) => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Page pageTitle="Pando Info">
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
              Status
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{
                wordBreak: "break-word",
              }}
            >
              Live
            </Typography>
            <Divider></Divider>

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
              HTTP API
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
              GraphQL API
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
              GraphSync API
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
    </Page>
  );
};

export default Provider;
