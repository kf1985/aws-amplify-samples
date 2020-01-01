/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateChat = `subscription OnCreateChat {
  onCreateChat {
    userId
    createdAt
    name
    message
  }
}
`;
export const onUpdateChat = `subscription OnUpdateChat {
  onUpdateChat {
    userId
    createdAt
    name
    message
  }
}
`;
export const onDeleteChat = `subscription OnDeleteChat {
  onDeleteChat {
    userId
    createdAt
    name
    message
  }
}
`;
export const onCreateItem = `subscription OnCreateItem {
  onCreateItem {
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
export const onUpdateItem = `subscription OnUpdateItem {
  onUpdateItem {
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
export const onDeleteItem = `subscription OnDeleteItem {
  onDeleteItem {
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
