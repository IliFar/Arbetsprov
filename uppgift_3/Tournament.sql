-- Teams
CREATE TABLE Teams(
  TeamID INT NOT NULL PRIMARY KEY,
  TeamName VARCHAR(100),
  ClubID INT,
  LeagueID INT,
  GroupID INT,
  FOREIGN Key (ClubID) REFERENCES Clubs(ClubID),
  FOREIGN Key (LeagueID) REFERENCES League(LeagueID),
  FOREIGN Key (GroupID) REFERENCES Groups(GroupID)
 );
 
-- Clubs
CREATE TABLE Clubs(
  ClubID INT NOT NULL PRIMARY KEY,
  ClubName VARCHAR(100)
);

-- Leagues
CREATE TABLE Leagues(
  LeagueID INT NOT NULL PRIMARY KEY,
  LeagueName VARCHAR(100),
);

-- Groups
CREATE TABLE Groups(
  GroupID INT NOT NULL PRIMARY key,
  GroupName VARCHAR(50),
  LeagueID INT,
  FOREIGN key (LeagueID) REFERENCES Leagues(LeagueID),
);

-- Matches
CREATE TABLE Matches(
  MatchID INT NOT NULL PRIMARY KEY,
  HomeTeamID INT,
  AwayTeamID INT,
  MatchDate DATE,
  HomeTeamScore INT,
  AwayTeamScore INT,
  LeagueID INT,
  FOREIGN key (HomeTeamID) REFERENCES Teams(TeamID),
  FOREIGN KEY (AwayTeamID) REFERENCES Teams(TeamID),
  FOREIGN KEY (LeagueID) REFERENCES Leagues(LeagueID)
);

-- Playoffs
CREATE TABLE Playoffs(
  PlayoffID INT PRIMARY key,
  LeagueID INT,
  Stage VARCHAR(50),
  FOREIGN KEY (LeagueID) REFERENCES Leagues(LeagueID)
);

-- PlayoffMatches
CREATE TABLE PlayoffMatches(
  PlayoffMatchID INT PRIMARY key,
  PlayoffID INT,
  HomeTeamID INT,
  AwayTeamID INT,
  MatchDate DATE,
  HomeTeamScore INT,
  AwayTeamScore INT,
  FOREIGN key (PlayoffID) REFERENCES Playoffs(PlayoffID),
  FOREIGN KEY (HomeTeamID) REFERENCES Teams(TeamID),
  FOREIGN KEY (AwayTeamID) REFERENCES Teams(TeamID)
);