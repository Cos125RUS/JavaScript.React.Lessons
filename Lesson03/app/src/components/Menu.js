import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Switch from '@mui/material/Switch';

const label = {inputProps: {'aria-label': 'Switch demo'}};

export default function Nav() {
    return (
        <>
            <ButtonGroup variant="contained" aria-label="Basic button group">
                <Button>Main</Button>
                <Button>Catalog</Button>
                <Button>Contacts</Button>
            </ButtonGroup>
            <Switch {...label} defaultChecked/>
        </>
    );
}
