/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserPersistedData = /* GraphQL */ `
  mutation CreateUserPersistedData(
    $input: CreateUserPersistedDataInput!
    $condition: ModelUserPersistedDataConditionInput
  ) {
    createUserPersistedData(input: $input, condition: $condition) {
      id
      totalScore
      totalGames
      wins
      losses
      rank
      UserSessions {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateUserPersistedData = /* GraphQL */ `
  mutation UpdateUserPersistedData(
    $input: UpdateUserPersistedDataInput!
    $condition: ModelUserPersistedDataConditionInput
  ) {
    updateUserPersistedData(input: $input, condition: $condition) {
      id
      totalScore
      totalGames
      wins
      losses
      rank
      UserSessions {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteUserPersistedData = /* GraphQL */ `
  mutation DeleteUserPersistedData(
    $input: DeleteUserPersistedDataInput!
    $condition: ModelUserPersistedDataConditionInput
  ) {
    deleteUserPersistedData(input: $input, condition: $condition) {
      id
      totalScore
      totalGames
      wins
      losses
      rank
      UserSessions {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createUserSession = /* GraphQL */ `
  mutation CreateUserSession(
    $input: CreateUserSessionInput!
    $condition: ModelUserSessionConditionInput
  ) {
    createUserSession(input: $input, condition: $condition) {
      id
      eliminated
      currentRoundResponse
      totalScore
      totalGames
      wins
      losses
      gameSessionID
      userPersistedDataID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateUserSession = /* GraphQL */ `
  mutation UpdateUserSession(
    $input: UpdateUserSessionInput!
    $condition: ModelUserSessionConditionInput
  ) {
    updateUserSession(input: $input, condition: $condition) {
      id
      eliminated
      currentRoundResponse
      totalScore
      totalGames
      wins
      losses
      gameSessionID
      userPersistedDataID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteUserSession = /* GraphQL */ `
  mutation DeleteUserSession(
    $input: DeleteUserSessionInput!
    $condition: ModelUserSessionConditionInput
  ) {
    deleteUserSession(input: $input, condition: $condition) {
      id
      eliminated
      currentRoundResponse
      totalScore
      totalGames
      wins
      losses
      gameSessionID
      userPersistedDataID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createGameSession = /* GraphQL */ `
  mutation CreateGameSession(
    $input: CreateGameSessionInput!
    $condition: ModelGameSessionConditionInput
  ) {
    createGameSession(input: $input, condition: $condition) {
      id
      pinCode
      playerCount
      roundNumber
      roundPrompt
      currentRoundExpiration
      UserSessions {
        nextToken
        startedAt
      }
      playersResponded
      roundMode
      aiResponse
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateGameSession = /* GraphQL */ `
  mutation UpdateGameSession(
    $input: UpdateGameSessionInput!
    $condition: ModelGameSessionConditionInput
  ) {
    updateGameSession(input: $input, condition: $condition) {
      id
      pinCode
      playerCount
      roundNumber
      roundPrompt
      currentRoundExpiration
      UserSessions {
        nextToken
        startedAt
      }
      playersResponded
      roundMode
      aiResponse
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteGameSession = /* GraphQL */ `
  mutation DeleteGameSession(
    $input: DeleteGameSessionInput!
    $condition: ModelGameSessionConditionInput
  ) {
    deleteGameSession(input: $input, condition: $condition) {
      id
      pinCode
      playerCount
      roundNumber
      roundPrompt
      currentRoundExpiration
      UserSessions {
        nextToken
        startedAt
      }
      playersResponded
      roundMode
      aiResponse
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;