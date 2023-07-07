import axios from 'axios';
import { notFound } from 'next/navigation';

/**
 * @function getAllBlog
 * get all blog post
 */
export async function getAllBlog() {
  const get_data = await axios.get(`http://localhost:3000/api/posts/`);

  !get_data.data && new Error('Failed to get all blog posts');

  return get_data.data;
}

/**
 * @function getSingleblog
 * @param id
 * get single blog post
 */
export async function getSingleBlog(id) {
  const get_data_by_id = await axios.get(`http://localhost:3000/api/posts/${id}`);

  !get_data_by_id && notFound()

  return get_data_by_id.data;
}
