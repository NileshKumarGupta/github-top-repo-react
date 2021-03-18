import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Link,
} from "@material-ui/core";

import "./organisationRepos.css";

const OrganisationRepos = ({ repos, setSelectedRepo }) => {
  const renderedItems = repos.map((repo) => {
    return (
      <TableRow
        key={repo.name}
        className="tableRow"
        onClick={() => setSelectedRepo([repo.name, repo.owner.login])}
      >
        <TableCell component="th" scope="row">
          {repo.name}
        </TableCell>
        <TableCell align="right">
          <Link href={repo.html_url}>{repo.html_url}</Link>
        </TableCell>
        <TableCell align="right">{repo.stargazers_count}</TableCell>
        <TableCell align="right">{repo.forks}</TableCell>
      </TableRow>
    );
  });

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow className="tableHeader">
            <TableCell>Repository</TableCell>
            <TableCell align="right">URL</TableCell>
            <TableCell align="right">Stars</TableCell>
            <TableCell align="right">Forks</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{renderedItems}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrganisationRepos;
