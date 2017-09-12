deleteButton() {
  if ( this.props.formType === 'edit' ) {
    return (
      <div className='input-wrapper'>
        <button onClick={this.handleDelete} >Delete Review</button>
      </div>
    );
  } else {
    return null;
  }
}

titleText() {
  if ( this.props.formType === 'edit' ) {
    return 'Edit Your Review';
  } else {
    return 'Write a Review';
  }
}


/* <div className='center flex-box'>
  <div className='col-1-2'>
    <div className="business-form-container">
      <form onSubmit={this.handleSubmit} className="business-form-box">
        <h2>{this.titleText()}</h2>
        <div className="business-form">
          <label htmlFor='rating'>Your Rating</label>
          <select className='input-wrapper'
            id="rating" value={this.state.rating}
            onChange={this.update('rating')} >
            <option value='1' >
              ☆ - Eek! Methinks not.</option>
            <option value='2' >
              ☆☆ - Meh. I've experinced better.</option>
            <option value='3' >
              ☆☆☆ - A-OK.</option>
            <option value='4' >
              ☆☆☆☆ - Yay! I'm a fan.</option>
            <option value='5' >
              ☆☆☆☆☆ - Woohoo! As good as it gets!</option>
          </select>
          <br />
          <div className='input-wrapper'>
            <textarea type="text"
              id="body"
              onChange={this.update('body')}
              className="login-input"
              placeholder="Your review helps others learn about great
              local businesses.

              Please don't review this business if you received a
              freebie for writing this review, or if you're connected
              in any way to the owner or employees."
              value={this.state.body} />
          </div>
          <div className='input-wrapper'>
            <button type="submit" >Post Review</button>
          </div>
          {this.deleteButton()}
        </div>
      </form>
    </div>
  </div>
</div>
</div> */
