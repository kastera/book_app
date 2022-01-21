import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core'
import { createStyles, makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    app_name: {
      flexGrow: 1,
      textAlign: "center",
      fontSize: 25,
    }
  })
);

// App.tsxからtextをpropsで受け取る
interface Props {
  text: string
}
  
const Header: React.FC<Props> = (props) => {
  const classes = useStyles();

  return (
    <AppBar position='static' color="secondary">
      <Toolbar>
        <Typography component='h2' className={classes.app_name}>
          {props.text}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
