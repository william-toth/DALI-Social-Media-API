import mongoose, { Schema } from 'mongoose';

const PostSchema = new Schema({
  title: String,
  author: String,
  content: String,
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
});

const PostModel = mongoose.model('Post', PostSchema);

export default PostModel;
