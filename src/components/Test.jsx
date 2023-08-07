import { Autocomplete, TextField } from '@mui/material'
import React from 'react'

const Test = () => {
    const options = [
        1 , 2,  4,  5, 
    ]
    return (
        <div>
            <Autocomplete
                multiple
                limitTags={2}
                id="multiple-limit-tags"
                options={options}
                getOptionLabel={(option) => option}
                renderInput={(params) => (
                    <TextField {...params} label="limitTags" placeholder="Favorites" />
                )}
                sx={{ width: '500px' }}
            />
        </div>
    )
}

export default Test