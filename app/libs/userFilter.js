import axios from 'axios';

export async function sessionData(userName) {
  try {
    const data = await axios.get(`http://localhost:3000/api/posts?username=${userName}`);

    return data;
  } catch (error) {
    console.error(error);
  }
}
