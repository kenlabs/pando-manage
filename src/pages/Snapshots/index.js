import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

import PageContainer from "../../components/PageContainer";
import Page from "material-ui-shell/lib/containers/Page";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import Snapshot from "../../components/Snapshot";
import { getSnapshots } from "apis/snapshots";
const rows = [
  {
    id: "1kDIMU1ZfYgOqCXET3w4SJA5cBjv87zipruLKQGdRPx0m29ayFHheNon6sWVtlbicl9fHlMUjcaPXoRZz8TUgqSdrlHDObPIw2wD5",
    lastName: "Snow",
    firstName: "Jon",
    age: 35,
  },
  {
    id: "2kDIMU1ZfYgOqCXET3w4SJA5cBjv87zipruLKQGdRPx0m29ayFHheNon6sWVtlbicl9fHlMUjcaPXoRZz8TUgqSdrlHDObPIw2wD5",
    lastName: "Lannister",
    firstName: "Cersei",
    age: 42,
  },
  {
    id: "3kDIMU1ZfYgOqCXET3w4SJA5cBjv87zipruLKQGdRPx0m29ayFHheNon6sWVtlbicl9fHlMUjcaPXoRZz8TUgqSdrlHDObPIw2wD5",
    lastName: "Lannister",
    firstName: "Jaime",
    age: 45,
  },
  {
    id: "4kDIMU1ZfYgOqCXET3w4SJA5cBjv87zipruLKQGdRPx0m29ayFHheNon6sWVtlbicl9fHlMUjcaPXoRZz8TUgqSdrlHDObPIw2wD5",
    lastName: "Stark",
    firstName: "Arya",
    age: 16,
  },
  {
    id: "5kDIMU1ZfYgOqCXET3w4SJA5cBjv87zipruLKQGdRPx0m29ayFHheNon6sWVtlbicl9fHlMUjcaPXoRZz8TUgqSdrlHDObPIw2wD5",
    lastName: "Targaryen",
    firstName: "Daenerys",
    age: null,
  },
  {
    id: "6kDIMU1ZfYgOqCXET3w4SJA5cBjv87zipruLKQGdRPx0m29ayFHheNon6sWVtlbicl9fHlMUjcaPXoRZz8TUgqSdrlHDObPIw2wD5",
    lastName: "Melisandre",
    firstName: null,
    age: 150,
  },
  {
    id: "7kDIMU1ZfYgOqCXET3w4SJA5cBjv87zipruLKQGdRPx0m29ayFHheNon6sWVtlbicl9fHlMUjcaPXoRZz8TUgqSdrlHDObPIw2wD5",
    lastName: "Clifford",
    firstName: "Ferrara",
    age: 44,
  },
  {
    id: "8kDIMU1ZfYgOqCXET3w4SJA5cBjv87zipruLKQGdRPx0m29ayFHheNon6sWVtlbicl9fHlMUjcaPXoRZz8TUgqSdrlHDObPIw2wD5",
    lastName: "Frances",
    firstName: "Rossini",
    age: 36,
  },
  {
    id: "9kDIMU1ZfYgOqCXET3w4SJA5cBjv87zipruLKQGdRPx0m29ayFHheNon6sWVtlbicl9fHlMUjcaPXoRZz8TUgqSdrlHDObPIw2wD5",
    lastName: "Roxie",
    firstName: "Harvey",
    age: 65,
  },
];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Snapshots = (props) => {
  const columns = [
    { field: "id", headerName: "Snapshot ID", width: 700 },
    {
      field: "firstName",
      headerName: "CreateAt",
      width: 150,
    },
    {
      headerName: "Detail",
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
    },
  ];
  const [open, setOpen] = useState(false);

  const handleClickOpen = (row) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [snapshots, setSnapshots] = useState([]);

  useEffect(() => {
    getSnapshots().then((res) => {
      setSnapshots(res.data?.Data);
    });
  }, []);

  return (
    <Page pageTitle="Snapshots">
      <PageContainer>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
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
        <Snapshot onClose={handleClose} />
      </Dialog>
    </Page>
  );
};
export default Snapshots;
