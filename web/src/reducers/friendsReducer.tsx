export interface UserFriend {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export const friendsReducer = (state: UserFriend[], action: any) => {
  switch (action.type) {
    case "SET_INITIAL":
      return [...action.friends];

    case "ADD_FRIEND":
      return [
        {
          _id: action.friend._id,
          firstName: action.friend.firstName,
          lastName: action.friend.lastName,
          email: action.friend.email
        },
        ...state
      ];

    case "DELETE_FRIEND":
      return state.filter(
        (friend: UserFriend) => friend._id !== action.friend._id
      );

    default:
      return state;
  }
};
