import PostMessage from "../models/postMessage.js"

export const getPost = async (req, res) => {
    try {
        const postMessage = await PostMessage.find()
        res.status(200).json(postMessage)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
export const createPost = async (req, res) => {
    const {title, message, selectedFile, creator, tags} = req.body;
    const newPostMessage = new PostMessage({ title, message, selectedFile, creator, tags })

     try {
        console.log(newPostMessage);
        await newPostMessage.save();
        res.status(201).json(newPostMessage)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}