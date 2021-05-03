import React, { useState, useEffect, FunctionComponent, ReactNode } from 'react';
import PropTypes from 'prop-types';
import PHCCApiClient from '@utils/ApiClient';
import { getTeams, getUniqueMonths } from '@utils/statsHelper';

export const AppContext = React.createContext(null);

type Props = {
  children: ReactNode;
};

export const AppProvider: FunctionComponent<Props> = ({ children }) => {
  const [teamData, setTeamData] = useState(null);
  const [teams, setTeams] = useState([]);
  const [months, setMonths] = useState([]);

  useEffect(() => {
    const result = PHCCApiClient.fetchTeamOverallDetails();
    const teamResult = getTeams(result);
    const monthsResult = getUniqueMonths(result);
    setTeams(teamResult);
    setTeamData(result);
    setMonths(monthsResult);
  }, []);

  return <AppContext.Provider value={{ teamData, teams, months }}>{children}</AppContext.Provider>;
};

AppProvider.propTypes = {
  children: PropTypes.node,
};
