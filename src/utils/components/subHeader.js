import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import Data from "../../App"

export default function SubHeader() {
    const [filled, setfilled] = useState('outlined')
    const [listData, setListData] = useState(Data)
    const onChipHandler=(val) => {
        console.log(val)
        // setfilled(null)

    }
    
    return (
        <div className='Sub-header'>

            <Chip className= "Chip-unit"
                // onClick= {}
                avatar={<Avatar alt="P" src="./utils/pics/logo" />}
                label="men's clothing"
                variant={filled}
                // onClick= {() => onChipHandler.bind(this, e)}
                
            />
            <Chip className= "Chip-unit"
                avatar={<Avatar alt="C" src="./utils/pics/logo" />}
                label="jewelery"
                variant={filled}
            />
            <Chip className= "Chip-unit"
                avatar={<Avatar alt="B" src="./utils/pics/logo" />}
                label="electronics"
                variant={filled}
            />
            <Chip className= "Chip-unit"
                avatar={<Avatar alt="CA" src="./utils/pics/logo" />}
                label="women's clothing"
                variant={filled}
            />
        </div>
    )

}