import axios from 'axios';

/**
 * @param id
 * @param mutate
 * @function deleteSingleUser
 * delete single user
 */
export const deleteSingleUser = async (id, mutate) => {
  try {
    await axios.delete(`http://localhost:3000/api/posts/${id}`);
    mutate
  } catch (error) {
    console.log(error);
  }
};
