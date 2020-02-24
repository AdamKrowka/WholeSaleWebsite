import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { red } from "@material-ui/core/colors";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InfoIcon from "@material-ui/icons/Info";
import AddToCartDialog from "./AddToCartDialog";
import ProductInfoDialog from "./ProductInfoDialog";

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const useStyles = makeStyles(theme => ({
  card: {
    margin: 10,
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

export default function ProductCard({ data, sendProductToCart }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClosing = close => {
    setOpenDialog(false);
  };

  return (
    <>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {data.avatar}
            </Avatar>
          }
          action={
            <IconButton onClick={() => setExpanded(true)}>
              <MoreVertIcon />
            </IconButton>
          }
          title={data.title}
          subheader={data.addingDate}
        />
        <CardMedia className={classes.media} image={data.image} title={data.imageTitle} />
        <CardContent>
          <Typography variant="h3" color="textSecondary" component="p">
            {data.shortDesc}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="buy" onClick={() => setOpenDialog(true)}>
            <AddShoppingCartIcon />
          </IconButton>
          {openDialog ? (
            <AddToCartDialog
              sendProductToCart={sendProductToCart}
              openDialog={openDialog}
              handleClosing={handleClosing}
              data={data}
            />
          ) : (
            <></>
          )}
        </CardActions>
      </Card>
      {expanded ? (
        <ProductInfoDialog description={data.description} onClose={() => setExpanded(false)} />
      ) : (
        <></>
      )}
    </>
  );
}
