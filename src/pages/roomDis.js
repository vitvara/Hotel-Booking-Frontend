import { Fragment } from "react"
import { Container } from "react-bootstrap"
import RoomList from "../components/RoomList"
import classes from "./roomDis.module.css"

const MOCK_ROOM = [
        {
            id: 1,
            room_number: 1,
            building: "A",
            floor: 1,
            bed: 1,
            price: 4000,
            max_guest: 2,
            status:"avaliable",
            type: "Suite",
        },
        {
            id: 2,
            room_number: 2,
            building: "A",
            floor: 1,
            bed: 1,
            price: 4000,
            max_guest: 2,
            status:"pending",
            type: "Suite",
            user_id: 1
        },
        {
            id: 3,
            room_number: 3,
            building: "A",
            floor: 1,
            bed: 1,
            price: 4000,
            max_guest: 2,
            status:"reserved",
            type: "Suite",
            user_id: 2
        }
    ]


const RoomDis = () => {
    return (
        <Fragment>
            <div className={classes.container}>
                <RoomList data={MOCK_ROOM} className={classes.card}/>
            </div>
        </Fragment>
    )
}

export default RoomDis;