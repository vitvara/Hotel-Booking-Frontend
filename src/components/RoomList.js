import { Fragment } from "react";
import { Container } from "react-bootstrap";
import RoomCard from "./RoomCard";

const RoomList = (props) => {
  const roomCard = props.data.map((room) => {
    return (
      <RoomCard
        roomNum={room.room_number}
        status={room.status}
        building={room.building}
        floor={room.floor}
        bed={room.bed}
        price={room.price}
        maxGuest={room.max_guest}
        type={room.type}
        key={room.id}
      />
    );
  });

  return (
    <Fragment>
      <Container>{roomCard}</Container>
    </Fragment>
  );
};

export default RoomList;
