import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import Data from "../../App"
const myFilters = [
    {
        label: "men's clothing",
        alt: "M",
        id: 1,
        img: require("../pics/logo.png")
    },
    {
        label: "jewelery",
        alt: "J",
        id: 2,
        img: require("../pics/logo.png")
    },
    {
        label: "electronics",
        alt: "E",
        id: 3,
        img: require("../pics/logo.png")
    },
    {
        label: "women's clothing",
        alt: "W",
        id: 4,
        img: require("../pics/logo.png")
    }
]
export default function SubHeader({ filters, setFilters }) {
    return (
        <div className='Sub-header'>
            {
                myFilters.map((filter, ind) => {

                    const active = filters.includes(filter.label)
                    return <Chip key={ind} className="Chip-unit"
                        avatar={<Avatar alt={filter.alt} src={filter.img} />}
                        label={filter.label}
                        variant={!active ? 'outlined' : ''}
                        color= 'success'
                        onClick={(e) => {
                            if (active) setFilters([...filters.filter(item => item !== filter.label)])
                            else setFilters([...filters, filter.label])
                            console.log(filters)
                        }}
                    />
                })
            }
        </div>
    )

}