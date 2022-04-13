const paginate = (followers) => {
  const itemsPerPage = 9;
  const pages = Math.ceil(followers.length / itemsPerPage);

  const newFollowers = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    const end = index * itemsPerPage + itemsPerPage;
    // console.log(followers.slice(start, end));
    return followers.slice(start, end);
  });

  // console.log(newFollowers);
  return newFollowers;
};

export default paginate;

/*
Return example:
[Array(9), Array(9), Array(9), Array(9), Array(9), Array(9), Array(9), Array(9), Array(9), Array(9), Array(9), Array(1)]
*/
