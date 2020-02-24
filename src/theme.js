import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    primary: {
      main: "#3d5afe"
    },
    secondary: {
      main: "#3f51b5"
    }
  },
  flexCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100%"
  }
});
