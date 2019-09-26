import grabToken from "../../../../../../util/grab-token";

import axios from "axios";

export const deleteFromDB = async (id: string) => {
  let token = grabToken();
  const url = `http://localhost:8000/api/v1.0/items/delete-item/${id}`;

  try {
    await axios.delete(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  } catch (err) {
    console.log(err); // For now
  }
};

export const updateItemBoughtStatus = async (url: string) => {
  let token = grabToken();

  axios.put(
    url,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
};

export const updateItemShareStatus = async (url: string) => {
  let token = grabToken();

  try {
    const response = await axios.put(
      url,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    return response;
  } catch (err) {
    alert(err.response.data.payload.message);
  }
};
