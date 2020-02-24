import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Container from "@material-ui/core/Container";
import AppBar from "./components/AppBar";
import Card from "./components/Card";
import Grid from "@material-ui/core/Grid";
import CardData from "./data/CardData";

const useStyles = makeStyles(theme => {
  return {
    list: {
      width: 250
    },
    sideBar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100%",
      flexDirection: "column"
    }
  };
});
const App = () => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    left: false
  });
  const [data, setData] = React.useState(CardData);
  const [filtredData, setFiltredData] = React.useState(data);
  const [cart, setCart] = React.useState([]);

  const toggleDrawer = open => () => {
    setState({ left: open });
  };

  const handleInputSearch = e => {
    let filteredData = data.filter(elem => {
      let title = elem.title.toLowerCase();
      return title.includes(e.target.value.toLowerCase());
    });
    setFiltredData(filteredData);

    console.log(filteredData);
  };

  const sendProductToCart = (data, newValue) => {
    const value = +newValue;
    const index = cart.findIndex(e => e.data.title == data.title);
    if (index < 0) setCart([...cart, { data, value }]);
    else {
      let cartTemp = cart.map(e => e);
      cartTemp[index].value += value;
      setCart(cartTemp);
    }
  };

  const sortData = sort => {
    console.log(sort);
  };

  const sideList = () => (
    <div className={classes.list} role="presentation">
      <h1
        style={{
          fontSize: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100%",
          flexDirection: "column"
        }}
      >
        Hello World
      </h1>
    </div>
  );
  return (
    <>
      <AppBar
        handleDrower={toggleDrawer(true)}
        handleInputSearch={handleInputSearch}
        cartBadge={cart.length}
        sortData={sortData}
      ></AppBar>
      <div>
        <Drawer open={state.left} onClose={toggleDrawer(false)}>
          {sideList("left")}
        </Drawer>
      </div>
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          {filtredData.map((e, i) => (
            <Grid key={i} item xs={6} md={3}>
              <Card style={{ float: "left" }} data={e} sendProductToCart={sendProductToCart}></Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default App;
