import { ar, num } from "../util/utility";
import Uniqid from "uniqid";

function Player(name, playerID) {
  this.data = {
    id: playerID,
    name: name,
    resources: {
      ceramics: 0,
      fuel: 0,
      squid: 0,
      flora: 0,
      carbon: 0,
    },
    trade: {
      offer: {
        ceramics: 0,
        fuel: 0,
        squid: 0,
        flora: 0,
        carbon: 0,
      },
      for: {
        ceramics: 0,
        fuel: 0,
        squid: 0,
        flora: 0,
        carbon: 0,
      },
    },
    developmentCards: {
      victoryPoints: {
        terraform: 0,
        newTechnology: 0,
        squishySubstance: 0,
      },
      pilots: 0,
      buildTwoWarpTunnels: 0,
    },
    awards: {
      longestWarp: 0,
      largestFederation: 0,
    },
    build: {
      active: {
        colonies: 0,
        metropolis: 0,
        warpTunnels: 0,
      },
      remainder: {
        colonies() {
          return 5 - this.data.build.active.colonies;
        },
        metropolis() {
          return 4 - this.data.build.active.metropolis;
        },
        warpTunnels() {
          return 12 - this.data.build.active.warpTunnels;
        },
      },
    },
    victoryPoints() {
      const developmentCardVictoryPoints = ar.sum(
        Object.keys(this.data.developmentCards.victoryPoints)
      );
      this.data.build.active.colonies +
        this.data.build.active.metropolis * 2 +
        this.data.Awards.longestWarp * 2 +
        this.data.Awards.largestFederation * 2 +
        developmentCardVictoryPoints;
    },
    hasWon() {
      return this.data.victoryPoints() >= 10;
    },
  };
}

export const addPlayer = (name, playerList) => {
  const playerID = Uniqid();
  playerList[playerId] = new Player(name, playerID);
};

export const deletePlayer = (playerID, playerList) => {
  delete playerList[playerId];
};
export default Player;
