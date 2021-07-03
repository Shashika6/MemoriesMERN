import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);


    } catch (error) {
        res.status(404).json({ message: error.message });
    }

    res.send('This works!');
}

export const createPost = async () => {
    const post = req.body;

    const newPost = newPostMessage(post);

    try {
        await newPost.save();
        res.status(202).json(newPost);
    } catch (error) {
        restart.status(404).json({ message: error.message })
    }
}