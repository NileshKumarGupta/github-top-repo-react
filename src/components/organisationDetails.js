import { Typography } from "@material-ui/core";
import React from "react";
import "./organisationDetails.css";

const OrganisationDetails = ({ orgName, len }) => {
  return (
    <div className="organisationDetails">
      <Typography variant="h6">
        {orgName.toUpperCase()}: {len} Repositories
      </Typography>
    </div>
  );
};

export default OrganisationDetails;
