import { createPost } from "@/pages/redux/actions/posts";
import { Button, Paper, TextField, Typography } from "@mui/material"
import React, { useState } from 'react'
import FileBase64 from 'react-file-base64';
import { useDispatch } from "react-redux";
const Form = () => {
  const dispatch = useDispatch()
  const [postData, setPostData] = useState(
    { creator: '', title: '', message: '', tags: '', selectedFile: '' }
  )
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData))
  }
  const clear = () => {

  }

  return (
    <Paper>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Typography variant="h6">Creating a Memory</Typography>
        <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
        <TextField name="title" variant="outlined" label="title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name="message" variant="outlined" label="message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <TextField name="tags" variant="outlined" label="tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })} />
        <div>
          <FileBase64
            type="file"
            multiple={false}
            onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
          >
          </FileBase64>
        </div>
        <Button variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>

  )
}

export default Form