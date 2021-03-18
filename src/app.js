import React, { useEffect, useState } from "react";
import Header from "./components/header";
import SearchForm from "./components/searchForm";
import Organisation from "./components/organisation";
import { Container } from "@material-ui/core";
import { Octokit } from "@octokit/core";

/*

  List of components

  ++Header
  1. Search Form
  2. Organisation 
    --Organisation Details
    --Organisation Repos
      --modal to show further information about the repo

*/

const App = () => {
  const [orgName, setOrgName] = useState("");
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const octokit = new Octokit();

    const getRepos = async () => {
      const response = await octokit.request("GET /orgs/{org}/repos", {
        org: orgName,
      });

      setRepos(response.data);
    };

    if (orgName)
      getRepos().catch(() => {
        alert("The Request Failed, Please try again!!");
      });

    return () => {
      setRepos([]);
    };
  }, [orgName]);

  return (
    <Container>
      <Header />
      <SearchForm setOrgName={setOrgName} />
      <Organisation orgName={orgName} repos={repos} />
    </Container>
  );
};

export default App;
