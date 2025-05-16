import { Request, Response } from 'express';
import axios from 'axios';
import User from '../models/User';

export const loadUsers = async (_req: Request, res: Response) => {
  try {
    const usersRes = await axios.get('https://jsonplaceholder.typicode.com/users');
    const postsRes = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const commentsRes = await axios.get('https://jsonplaceholder.typicode.com/comments');

    const users = usersRes.data;
    const posts = postsRes.data;
    const comments = commentsRes.data;

    for (const user of users) {
      const userPosts = posts.filter((p: any) => p.userId === user.id);
      for (const post of userPosts) {
        post.comments = comments.filter((c: any) => c.postId === post.id);
      }
      user.posts = userPosts;
    }

   
    await User.deleteMany({});

    await User.insertMany(users);

    res.status(200).json({ message: 'Users loaded successfully' });
  } catch (err) {
    console.error('Load users error:', err);
    res.status(500).json({ error: 'Failed to load users' });
  }
};


export const deleteAllUsers = async (_req: Request, res: Response) => {
  try {
    await User.deleteMany({});
    res.status(200).json({ message: 'All users deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete users' });
  }
};

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  const userId = parseInt(req.params.userId);
  try {
    const deleted = await User.findOneAndDelete({ id: userId });
    if (!deleted){
        res.status(404).json({ error: 'User not found' });

    } 
    res.status(200).json({ message: 'User deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete user' });
  }
};


export const getUserById = async (req: Request, res: Response): Promise<void> => {
  const userId = parseInt(req.params.userId);
  try {
    const user = await User.findOne({ id: userId });
    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch user' });
  }
};


export const addUser = async (req: Request, res: Response): Promise<void> => {
  const user = req.body;
  try {
    const existing = await User.findOne({ id: user.id });
    if (existing) {
      res.status(400).json({ error: 'User already exists' });
      return;
    }

    const newUser = new User(user);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add user' });
  }
};



export const updateUser = async (req: Request, res: Response): Promise<void> => {
  const userId = parseInt(req.params.userId);
  const updatedData = req.body;

  try {
    const updated = await User.findOneAndUpdate({ id: userId }, updatedData, { new: true });
    if (!updated) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    res.status(200).json({ message: 'User updated', user: updated });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update user' });
  }
};
