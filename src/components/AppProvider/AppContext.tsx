import React, { useState, useEffect, FunctionComponent, ReactNode } from 'react';
import PropTypes from 'prop-types';
import PHCCApiClient from '../../utils/ApiClient';
import { getTeams } from '../../utils/statsHelper';

export const AppContext = React.createContext(null);

type Props = {
  children: ReactNode;
};

export const AppProvider: FunctionComponent<Props> = ({ children }) => {

  const [teamData, setTeamData] = useState(null);
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const result = PHCCApiClient.fetchTeamOverallDetails();
    console.log("fetching the team data");
    const teamResult = getTeams(result);
    setTeams(teamResult);
    setTeamData(result);
  },[]);

  return(
    <AppContext.Provider value={{teamData, teams}}>
      {children}
    </AppContext.Provider>
  )
};

AppProvider.propTypes = {
  children: PropTypes.node,
};
