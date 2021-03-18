import { Card, CardContent, Typography, Link, Grow } from "@material-ui/core";
import React from "react";

const RepoDetails = ({ repoDetails }) => {
  if (!repoDetails) return null;

  return (
    <Grow in={true}>
      <Card style={{ margin: "20px" }}>
        <CardContent>
          <Typography>Repository Details</Typography>
          <hr></hr>
          <Typography variant="h3">{repoDetails.name || ""}</Typography>
          <Typography variant="h6">{repoDetails.full_name || ""}</Typography>
          <Typography>{repoDetails.description || ""}</Typography>
          <Typography>
            {repoDetails.homepage ? (
              <Link href={repoDetails.homepage}>Homepage</Link>
            ) : null}
          </Typography>
          <Typography>
            License:{" "}
            {repoDetails.license ? repoDetails.license.name : "Not Specified"}
          </Typography>
          <Typography>{repoDetails.fork ? "Forked" : "Not Forked"}</Typography>
        </CardContent>
      </Card>
    </Grow>
  );
};

export default RepoDetails;
