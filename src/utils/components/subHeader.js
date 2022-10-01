import React from "react";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";

export default function SubHeader() {
    return (
        <div className='Sub-header'>
            <Chip className= "Chip-unit"
                avatar={<Avatar alt="P" src="./utils/pics/logo" />}
                label="Purses"
                variant="outlined"
            />
            <Chip className= "Chip-unit"
                avatar={<Avatar alt="C" src="./utils/pics/logo" />}
                label="Courts"
                variant="outlined"
            />
            <Chip className= "Chip-unit"
                avatar={<Avatar alt="J" src="./utils/pics/logo" />}
                label="Jewellary"
                variant="outlined"
            />
            <Chip className= "Chip-unit"
                avatar={<Avatar alt="B" src="./utils/pics/logo" />}
                label="Bikes"
                variant="outlined"
            />
            <Chip className= "Chip-unit"
                avatar={<Avatar alt="CA" src="./utils/pics/logo" />}
                label="Cars"
                variant="outlined"
            />
        </div>
    )

}