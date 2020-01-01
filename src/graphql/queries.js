/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getChat = `query GetChat($userId: ID!, $createdAt: AWSTimestamp!) {
  getChat(userId: $userId, createdAt: $createdAt) {
    userId
    createdAt
    name
    message
  }
}
`;
export const listChats = `query ListChats(
  $userId: ID
  $createdAt: ModelIntKeyConditionInput
  $filter: ModelChatFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listChats(
    userId: $userId
    createdAt: $createdAt
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      userId
      createdAt
      name
      message
    }
    nextToken
  }
}
`;
export const getItem = `query GetItem($itemId: ID!) {
  getItem(itemId: $itemId) {
    itemId
    status
    attributes {
      name
      description
    }
    date {
      createdAt
      updatedAt
    }
  }
}
`;
export const listItems = `query ListItems(
  $itemId: ID
  $filter: ModelItemFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listItems(
    itemId: $itemId
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      itemId
      status
    }
    nextToken
  }
}
`;
