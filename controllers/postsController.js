const createPost = async (req, res) => {
  res.send("createPost");
};
const deletePost = async (req, res) => {
  res.send("deletePost");
};
const getAllPosts = async (req, res) => {
  res.send("getAllPosts");
};
const updatePost = async (req, res) => {
  res.send("updatePost");
};
const showStats = async (req, res) => {
  res.send("showStats");
};

export { createPost, deletePost, getAllPosts, updatePost, showStats };
