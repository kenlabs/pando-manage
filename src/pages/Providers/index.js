import PageContainer from "../../components/PageContainer";
import Page from "material-ui-shell/lib/containers/Page";
import React, { useEffect, useState } from "react";
import ProviderCard from "../../components/ProviderCard";

import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import Grid from "@mui/material/Grid";
import Provider from "../../components/Provider";
import { getProvidersOrProvider } from "apis/providers";
import dayjs from "dayjs";

console.log(
  dayjs("2022-08-22T13:13:56.710937469Z").format("YYYY-MM-DD HH:mm:ss")
);
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Providers = () => {
  const [providers, setProviders] = useState([]);
  const [open, setOpen] = useState();
  const [selected, setSelected] = useState();
  const handleClickOpen = (provider) => {
    setSelected(provider);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    getProvidersOrProvider().then((res) => {
      const providers = res.data?.Data;
      setProviders(providers);
    });
  }, []);
  return (
    <Page pageTitle="Providers">
      <PageContainer>
        <Grid container spacing={10}>
          {providers
            .map((provider) => ({
              ...provider,
              name:
                provider.Name ||
                provider.AddrInfo?.ID.substr(
                  provider.AddrInfo?.ID?.length - 5,
                  provider.AddrInfo?.ID.length - 1
                ),
            }))
            .map((provider, index) => {
              return (
                <Grid item key={index}>
                  <ProviderCard
                    name={provider.name}
                    ID={provider?.AddrInfo?.ID}
                    onClickDetail={() => {
                      handleClickOpen(provider);
                    }}
                  />
                </Grid>
              );
            })}
        </Grid>
      </PageContainer>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <Provider providerDetail={selected} onClose={handleClose} />
      </Dialog>
    </Page>
  );
};
export default Providers;
