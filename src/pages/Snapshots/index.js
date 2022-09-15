import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

import PageContainer from "../../components/PageContainer";
import Page from "material-ui-shell/lib/containers/Page";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import Snapshot from "../../components/Snapshot";
import { getSnapshots, getSnapshotInfo } from "apis/snapshots";
import dayjs from "dayjs";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Snapshots = (props) => {
  const columns = [
    { field: "id", headerName: "Snapshot ID", width: 700 },
    {
      field: "CreatedTime",
      headerName: "CreateAt",
      width: 150,
      renderCell: (row) => {
        return dayjs(row?.value / 1000 / 1000).format("YYYY-MM-DD HH:mm:ss");
      },
    },
    {
      headerName: "Operation",
      renderCell: (row) => {
        return (
          <Button
            component="button"
            variant="contained"
            size="small"
            onClick={() => handleClickOpen(row)}
          >
            Detail
          </Button>
        );
      },
      width: 150,
    },
  ];
  const [open, setOpen] = useState(false);
  const [snapshot, setSnapshot] = useState();
  const handleClickOpen = (row) => {
    setSnapshot(null);
    getSnapshotInfo(row.id).then((res) => {
      setSnapshot({
        id: row.id,
        content: res?.data?.Data,
      });
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [snapshots, setSnapshots] = useState([]);

  useEffect(() => {
    getSnapshots().then((res) => {
      setSnapshots(
        res.data?.Data?.List.map((item) => {
          return {
            id: item.SnapShotCid["/"],
            CreatedTime: item.CreatedTime,
          };
        })
      );
    });
  }, []);

  return (
    <Page pageTitle="Snapshots">
      <PageContainer>
        <DataGrid
          key={"id"}
          rows={snapshots}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection={false}
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </PageContainer>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <Snapshot
          id={snapshot?.id}
          snapshot={snapshot?.content}
          onClose={handleClose}
        />
      </Dialog>
    </Page>
  );
};
export default Snapshots;
