import React from 'react';
import { TagInput } from 'reactjs-tag-input'

export default class Tags extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tags: []}
        this.onTagsChanged = this.onTagsChanged.bind(this);
    }

    onTagsChanged(tags) {
        this.setState({tags})
    }

    render() {
        return <TagInput wrapperStyle={`
        box-shadow: none;
        background: white;
        border-radius: 5px;
        border: 1px solid gray;
        margin-top: 22%;
        width: 50%;
      `} 
      
      tagStyle={`
    background: #6c0000;
        `}

        inputStyle={`
    background: white;
    `}
      tags={this.state.tags} onTagsChanged={this.onTagsChanged} />
    }
}

