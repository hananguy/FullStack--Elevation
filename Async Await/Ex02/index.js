// Starter code structure:
async function getUserWithPosts(userId) {

    const user = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const userPosts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const userData =
    {
        name: user.name,
        posts: userPosts    
    }

    return userData;


  // Your implementation here
  // 1. Fetch user from: https://jsonplaceholder.typicode.com/users/${userId}
  // 2. Fetch posts from: https://jsonplaceholder.typicode.com/posts?userId=${userId}
  // 3. Return combined data
}


getUserWithPosts(5)
  .then(data => {
    // data כאן הוא האובייקט userData
    console.log(data.name, data.posts);
  });