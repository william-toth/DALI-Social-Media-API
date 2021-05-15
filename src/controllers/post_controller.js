/* eslint-disable no-restricted-syntax */
/* eslint-disable eqeqeq */
import Post from '../models/post_model';

export const createPost = async (postFields) => {
  // await creating a post
  // return post
  const post = new Post();
  post.title = postFields.title;
  post.tags = postFields.tags;
  //   const arr = [];
  //   let currWord = '';
  //   for (const letter of postFields.tags) {
  //     if (letter == ' ') {
  //       arr.push(currWord);
  //       currWord = '';
  //     }
  //   }

  post.content = postFields.content;
  post.coverUrl = postFields.coverUrl;
  try {
    const savedpost = await post.save();
    return savedpost;
  } catch (error) {
    throw new Error(`create post error: ${error}`);
  }
};
export const getPosts = async () => {
  // await finding posts
  // return posts
  try {
    const posts = await Post.find({});
    return posts;
  } catch (error) {
    throw new Error(`find posts error: ${error}`);
  }
};
export const getPost = async (id) => {
  try {
    const post = await Post.findById(id);
    console.log('hi');
    return post;
  } catch (error) {
    throw new Error(`find posts error: ${error}`);
  }
};
export const deletePost = async (id) => {
  // await deleting a post
  // return confirmation
  try {
    return await Post.deleteOne({ _id: id });
  } catch (error) {
    throw new Error(`delete post error: ${error}`);
  }
};
export const updatePost = async (id, postFields) => {
  // await updating a post by id
  // return *updated* post
  try {
    const post = await Post.findById(id);
    if (postFields.title != null) {
      post.title = postFields.title;
    }
    if (postFields.tags != null) {
      post.tags = postFields.tags;
    }
    if (postFields.content != null) {
      post.content = postFields.content;
    }
    if (postFields.coverUrl != null) {
      post.coverUrl = postFields.coverUrl;
    }
    post.save();
    return post;
  } catch (error) {
    throw new Error(`update post post error: ${error}`);
  }
};
