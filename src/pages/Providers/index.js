import PageContainer from "../../components/PageContainer";
import Page from "material-ui-shell/lib/containers/Page";
import React, { useEffect, useState } from "react";
import ProviderCard from "../../components/ProviderCard";

import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import Grid from "@mui/material/Grid";
import Provider from "../../components/Provider";
import { getProvidersOrProvider } from "apis/providers";
const cards = [
  {
    name: "Dealbot",
  },
  {
    name: "FilDrive",
  },
  {
    name: "Bidbot",
  },
  {
    name: "FileCoin Green",
  },
  {
    name: "Filrep",
  },
  {
    name: "Large Scale Client",
  },
];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Providers = () => {
  const [providers, setProviders] = useState([]);
  const [open, setOpen] = useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    getProvidersOrProvider().then((res) => {
      const providers = res.data?.Data?.registeredProviders;
      setProviders(providers);
    });
  }, []);
  return (
    <Page pageTitle="Providers">
      <PageContainer>
        <Grid container spacing={10}>
          {cards.map((item, index) => {
            return (
              <Grid item key={index}>
                <ProviderCard
                  name={item.name}
                  onClickDetail={() => {
                    handleClickOpen();
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
        <Provider onClose={handleClose} />
      </Dialog>
    </Page>
  );
};
export default Providers;
