import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";

const Header = () => {
  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar
          variant="regular"
          className="toolBar"
          style={{ margin: "auto" }}
        >
          <Typography variant="h4">
            Check Top repositories of Organisations
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
