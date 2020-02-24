import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: {
    color: props => props.color,
    "&:hover": props => props.hover
    // "&:hover": { backgroundColor: "red" }
  }
});

const MyButton = props => {
  const classes = useStyles(props);
  return <Button className={classes.button}>{props.text}</Button>;
};

export default MyButton;
