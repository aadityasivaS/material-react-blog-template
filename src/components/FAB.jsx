import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
const useStyles = makeStyles((theme) => ({
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));
export default function FAB() {
  const classes = useStyles();
  return <Fab variant="extended" className={classes.fab} color="primary" aria-label="add">
    <AddIcon className={classes.extendedIcon} />
    New Post
  </Fab>;
}
