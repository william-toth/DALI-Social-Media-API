import { Router } from 'express';
import * as Posts from './controllers/post_controller';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'welcome to our blog api!' });
});

router.get('/posts', async (req, res) => {
  const posts = await Posts.getPosts();
  res.send(posts);
});

router.post('/posts', (req, res) => {
  const fields = req.body;
  Posts.createPost(fields);
  res.json({ message: 'posted successfully!' });
});

router.get('/posts/:id', async (req, res) => {
  const { id } = req.params;
  Posts.getPost(id).then((post) => {
    console.log('lol');
    if (post == null) {
      res.send('post not found');
    } else {
      res.json(post);
    }
  }).catch((error) => {
    res.send('post not found');
  });
});

router.put('/posts/:id', async (req, res) => {
  const { id } = req.params;
  const newFields = req.body;
  Posts.updatePost(id, newFields).then((post) => {
    console.log(post);
  }).catch(() => {
    console.log('boofpack');
  });
  res.json({ message: 'post edited successfully!' });
});

router.delete('/posts/:id', async (req, res) => {
  const { id } = req.params;
  const response = await Posts.deletePost(id);
  if (response.deletedCount === 0) {
    res.json({ message: 'post not found!' });
  } else {
    res.json({ message: 'post deleted successfully!' });
  }
});

export default router;
