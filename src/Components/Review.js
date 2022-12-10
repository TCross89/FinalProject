import React from 'react'



export default class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        comments: props.comments,
        content: props.content,
        count: 0
    };
  }

  render() {
    
    let comments;
    if (this.state.comments) {
        comments = this.state.comments.map((comment, index) => <Comment key={index} {...comment} />);
    }
    return (
      <div className="card w-75">
        <div className="card-header md-primary text-white">
            Review and Stars
        </div>
        <div className="card-body">
            {this.state.content}    
        </div>
        <div className="card-footer">
            <StarsButton />
            <ReviewButton />
            {comments}
        </div>
      </div>
    );        
  }
}