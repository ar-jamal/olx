import * as React from 'react'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import { useState } from 'react';

export default function SelectOptions({req}) {
    const [category, setCategory] = useState('');

    const SelectChangeHandler = (event) => {
        setCategory(event.target.value)
    }
    return (
        <FormControl required className='Selection'>
            <InputLabel id='demo-simple-select-required-label'>Category</InputLabel>
            <Select
                labelId='demo-simple-select-required-label'
                id='demo-simple-select-required'
                label='category *'
                onChange={SelectChangeHandler}
                value={category}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value="cars">Cars</MenuItem>
                <MenuItem value="motorBikes">Motorbikes</MenuItem>
                <MenuItem value="bicycles">Bicycles</MenuItem>
                <MenuItem value="autos">Autos</MenuItem>
            </Select>
        </FormControl>
    )
}