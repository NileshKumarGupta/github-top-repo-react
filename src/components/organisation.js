import React, { useEffect, useState } from "react";
import { CircularProgress } from "@material-ui/core";
import OrganisationRepos from "./organisationRepos";
import OrganisationDetails from "./organisationDetails";
import RepoDetails from "./repoDetails";
import { Octokit } from "@octokit/core";

const Organisation = ({ orgName, repos }) => {
  const [selectedRepo, setSelectedRepo] = useState([]);
  const [repoDetails, setRepoDetails] = useState(null);

  useEffect(() => {
    const octokit = new Octokit();

    const getRepoDetails = async () => {
      const response = await octokit.request("GET /repos/{owner}/{repo}", {
        repo: selectedRepo[0],
        owner: selectedRepo[1],
      });

      setRepoDetails(response.data);
    };

    if (selectedRepo.length !== 0) getRepoDetails();
  }, [selectedRepo]);

  return (
    <div>
      {orgName && repos.length > 0 ? (
        <React.Fragment>
          <OrganisationDetails orgName={orgName} len={repos.length} />
          <RepoDetails repoDetails={repoDetails} />
          <OrganisationRepos repos={repos} setSelectedRepo={setSelectedRepo} />
        </React.Fragment>
      ) : null}
      {orgName && repos.length === 0 ? (
        <div style={{ magin: "auto", textAlign: "center" }}>
          <CircularProgress />
        </div>
      ) : null}
    </div>
  );
};

export default Organisation;
