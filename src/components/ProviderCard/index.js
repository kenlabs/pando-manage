import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard({ name, desc, ID, onClickDetail }) {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {ID}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onClickDetail}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
