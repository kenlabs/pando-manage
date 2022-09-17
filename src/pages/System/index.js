/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { Grid, Divider } from "@mui/material";
import { Box } from "@mui/system";
import Page from "material-ui-shell/lib/containers/Page";
import { getSystemInfo } from "apis/system";
const Provider = ({ onClose }) => {
  const [systemInfo, setSystemInfo] = useState();

  useEffect(() => {
    getSystemInfo().then((res) => {
      setSystemInfo(res.data?.Data);
    });
  }, []);

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
              {systemInfo?.PeerID}
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
              {systemInfo?.Addresses?.HttpAPI}
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
              {systemInfo?.Addresses?.GraphQLAPI}
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
              {systemInfo?.Addresses?.GraphSyncAPI}
            </Typography>

            <Divider></Divider>
          </Box>
        </Grid>
        <Divider orientation="vertical" flexItem></Divider>
        <Grid
          item
          xs={8}
          style={{
            opacity: 0.3,
          }}
        >
          <Box
            style={{
              padding: 24,
            }}
          >
            <Box sx={{ width: "100%" }}>
              <iframe
                src="https://grafana.kencloud.com/d-solo/HHeNiW7Vk/pando?orgId=1&refresh=5s&from=1663391895304&to=1663413495304&panelId=4"
                width="450"
                height="200"
                frameborder="0"
              ></iframe>

              <iframe
                src="https://grafana.kencloud.com/d-solo/HHeNiW7Vk/pando?orgId=1&refresh=5s&from=1663391904674&to=1663413504674&panelId=2"
                width="450"
                height="200"
                frameborder="0"
                style={{ marginLeft: 10 }}
              ></iframe>

              <iframe
                src="https://grafana.kencloud.com/d-solo/HHeNiW7Vk/pando?orgId=1&refresh=5s&from=1663391791941&to=1663413391941&panelId=6"
                width="450"
                height="200"
                frameborder="0"
              ></iframe>

              <iframe
                src="https://grafana.kencloud.com/d-solo/HHeNiW7Vk/pando?orgId=1&refresh=5s&from=1663391874909&to=1663413474909&panelId=8"
                width="450"
                height="200"
                frameborder="0"
                style={{ marginLeft: 10 }}
              ></iframe>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Page>
  );
};

export default Provider;
