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

        <Grid item xs={8}>
          <Box
            style={{
              padding: 24,
            }}
          >
            <Box sx={{ width: "100%" }}>
              <iframe
                src="https://grafana.kencloud.com/d-solo/HHeNiW7Vk/pando?orgId=1&refresh=5s&theme=light&panelId=4"
                width="50%"
                height="200"
                frameborder="0"
                style={{ border: "1px solid #e5e5e5" }}
              ></iframe>

              <iframe
                src="https://grafana.kencloud.com/d-solo/HHeNiW7Vk/pando?orgId=1&refresh=5s&theme=light&panelId=2"
                width="50%"
                height="200"
                frameborder="0"
                style={{ border: "1px solid #e5e5e5" }}
              ></iframe>

              <iframe
                src="https://grafana.kencloud.com/d-solo/HHeNiW7Vk/pando?orgId=1&refresh=5s&theme=light&panelId=6"
                width="100%"
                height="300px"
                frameborder="0"
                style={{ border: "1px solid #e5e5e5" }}
              ></iframe>

              <iframe
                src="https://grafana.kencloud.com/d-solo/HHeNiW7Vk/pando?orgId=1&refresh=5s&theme=light&panelId=8"
                width="100%"
                height="300px"
                frameborder="0"
                style={{ border: "1px solid #e5e5e5" }}
              ></iframe>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Page>
  );
};

export default Provider;
