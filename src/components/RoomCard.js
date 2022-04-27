import { Fragment, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import classes from "./RoomCard.module.css";
import { Button, CardActionArea, CardActions } from "@mui/material";

const RoomCard = (props) => {
  const status = props.status;

  const displayStatus = () => {
    if (status === "avaliable") return "";
    else if (status === "pending") return classes.pending;
    else return classes.reserved;
  };

  const bookHandler = () => {
    console.log("booked");
  };

  return (
    <div className={classes.card}>
      <Card className={displayStatus()}>
        <CardMedia
          component="img"
          height="140"
          src={require("../static/image/room.jpg")}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.roomNum + props.building}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            guest: {props.maxGuest} | bed: {props.bed} | type: {props.type} |
            floor: {props.floor}
          </Typography>
          <hr />
          <Typography variant="body1" color="text.secondary">
            Price: {props.price}฿
          </Typography>
        </CardContent>

        <CardActions>
          {!(status === "avaliable") ? (
            status
          ) : (
            <Button size="small" color="primary" onClick={bookHandler}>
              Book Now
            </Button>
          )}
        </CardActions>
      </Card>
    </div>
  );
};

export default RoomCard;
