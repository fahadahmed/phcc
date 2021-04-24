import clubData from '../data/club-overall.json';
import teamData from '../data/team-overall.json';

const PHCCApiClient = {
  fetchClubOverallDetails() {
    return clubData;
  },

  fetchTeamOverallDetails() {
    return teamData;
  },
};

export default PHCCApiClient;
