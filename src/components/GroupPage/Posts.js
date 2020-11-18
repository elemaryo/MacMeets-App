import React, { useState } from "react";
import { IconButton, Typography } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Send } from "@material-ui/icons";
import SinglePost from './SinglePost';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));

function AddPosts (props) {
    const classes = useStyles();
    const [content, setContent] = useState("");

    const handleContent = (event) => {
      setContent(event.target.value);
    }

  const addAPost = () => {
    if (!content) {
      return;
    }
    if (content.length > 120) {
      return;
    }
    setContent('') // clear input 
    console.log(props) // onAdd : function () 
    let newPost = { content: content }
    props.onAdd(newPost)
  };

  return (
    <div>
      <div className="outerBox m10">
        <Typography variant="h4">What's on your mind?</Typography>
        <form noValidate autoComplete="off">
            <TextField onChange={handleContent} value={content} id="standard-basic" required helperText="Maximum 120 characters" label="Start a new conversation here" fullWidth='true' inputProps={{ maxLength: 60 }}/>
        </form>
        <IconButton onClick={addAPost}><Send/></IconButton>
      </div>
    </div>
  );
};

export default function Posts(){
  
  const [id, setID] = useState(0);
  const [posts, setPosts] = useState([]);
  
  const addPost = (post) => {
    // console.log(post, posts)
    // { content : 'text'} , [ {content: 'text} ]
    setID(id+1);
    console.log(id);
    post.postKey = id;
    setPosts([post, ...posts])
  }

  const deletePost = (id) => {
    // console.log(delID);
    setPosts(posts.filter(({postKey}) => postKey != id));
  }
  
  return (
    <div>
      <AddPosts onAdd={addPost}/> 
      {posts.map(singlePost => (
        <SinglePost
          onDelete={deletePost}
          postKey={singlePost.postKey}
          content={singlePost.content}
        />
      ))}
    </div>
  );
};