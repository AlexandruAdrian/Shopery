import axios from "axios";
import grabToken from "../../util/grab-token";

export interface IfriendsID {
  _id: string;
}

export async function getFriendIDs(url: string) {
  const token = grabToken();
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    if (response) return response.data;
  } catch (err) {
    if (err) console.log(err);
  }
}

export const getFriendsData = async (friendsID: IfriendsID[]) => {
  const friends = await Promise.all(
    friendsID.map(async id => {
      const result = await getFriendIDs(
        `http://localhost:8000/api/v1.0/users/user/${id}`
      );
      return result;
    })
  );

  return friends;
};

// sends delete request for removing a friend.
export const removeFriendFromDB = async (friendID: string) => {
  const token = grabToken();
  const url = `http://localhost:8000/api/v1.0/social/remove-friend/${friendID}`;
  try {
    await axios.delete(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  } catch (err) {
    console.log(err.response.data.payload.message);
  }
};

// sends add request for adding a friend.
export const addFriendInDB = async (email: string) => {
  const token = grabToken();
  const url = "http://localhost:8000/api/v1.0/social/add-friend";

  await axios.post(
    url,
    { email },
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
};
