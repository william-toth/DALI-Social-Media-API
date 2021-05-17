/* eslint-disable no-restricted-syntax */
/* eslint-disable eqeqeq */
import Post from '../models/post_model';

export const createPost = async (postFields) => {
  const post = new Post();
  post.title = postFields.title;
  post.content = postFields.content;
  post.author = postFields.author;

  try {
    const savedpost = await post.save();
    return savedpost;
  } catch (error) {
    throw new Error(`create post error: ${error}`);
  }
};
export const getPosts = async () => {
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
  try {
    return await Post.deleteOne({ _id: id });
  } catch (error) {
    throw new Error(`delete post error: ${error}`);
  }
};
export const updatePost = async (id, postFields) => {
  try {
    const post = await Post.findById(id);
    if (postFields.title != null) {
      post.title = postFields.title;
    }
    if (postFields.content != null) {
      post.content = postFields.content;
    }
    if (postFields.author != null) {
      post.author = postFields.author;
    }
    post.save();
    return post;
  } catch (error) {
    throw new Error(`update post post error: ${error}`);
  }
};
