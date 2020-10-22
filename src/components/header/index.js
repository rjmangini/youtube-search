import React from 'react';

import PropTypes from 'prop-types';
import { makeStyle, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles( (theme) => ({
    root: {
        margin: theme.spacing(4, 0)
    }
}));

function Header({text}) {
    const classes = useStyles;

    return (
        <div className={classes.root} >
            <Typography variant="h4">{text}</Typography>
        </div>
    )
}

Header.propTyepes = {
    text: PropTypes.string.isRequired
}

export default Header;
