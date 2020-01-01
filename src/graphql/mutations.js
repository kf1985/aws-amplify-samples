/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createChat = `mutation CreateChat(
  $input: CreateChatInput!
  $condition: ModelChatConditionInput
) {
  createChat(input: $input, condition: $condition) {
    userId
    createdAt
    name
    message
  }
}
`;
export const updateChat = `mutation UpdateChat(
  $input: UpdateChatInput!
  $condition: ModelChatConditionInput
) {
  updateChat(input: $input, condition: $condition) {
    userId
    createdAt
    name
    message
  }
}
`;
export const deleteChat = `mutation DeleteChat(
  $input: DeleteChatInput!
  $condition: ModelChatConditionInput
) {
  deleteChat(input: $input, condition: $condition) {
    userId
    createdAt
    name
    message
  }
}
`;
export const createItem = `mutation CreateItem(
  $input: CreateItemInput!
  $condition: ModelItemConditionInput
) {
  createItem(input: $input, condition: $condition) {
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
export const updateItem = `mutation UpdateItem(
  $input: UpdateItemInput!
  $condition: ModelItemConditionInput
) {
  updateItem(input: $input, condition: $condition) {
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
export const deleteItem = `mutation DeleteItem(
  $input: DeleteItemInput!
  $condition: ModelItemConditionInput
) {
  deleteItem(input: $input, condition: $condition) {
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
