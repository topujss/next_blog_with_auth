/**
 * get username data
 */
export async function myData() {
  const data = await axios.get(`http://localhost:3000/api/posts?username=${session?.data?.user?.name}`)
}
