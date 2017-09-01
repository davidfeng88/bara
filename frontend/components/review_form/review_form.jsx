import React from 'react';
import ErrorList from '../error_list';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    if (props.review) {
      this.state = Object.assign({}, props.review);
    } else {
      this.state = {
        rating: '3',
        body: '',
        business_id: `${props.business.id}`,
      };
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  // componentDidMount() {
  //   if (!this.props.review) {
  //     fetchReview();
  //   }
  // }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const reviewData = this.state;
    this.props.processForm(reviewData)
      .then(() => {
        this.resetForm();
        this.props.history.push(`/businesses/${this.props.business.id}`);
      });
  }

  resetForm() {
    this.setState({
      rating: '3',
      body: '',
      business_id: ``,
    });
  }

  titleText() {
    if (this.props.formType === 'edit') {
      return 'Edit Your Review';
    } else {
      return 'Write a Review';
    }
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteReview(this.props.review.id)
      .then(() => {
        this.resetForm();
        this.props.history.push(`/businesses/${this.props.business.id}`);
      });
  }

  deleteButton() {
    if (this.props.formType === 'edit') {
      return(
        <div className='input-wrapper'>
          <button onClick={this.handleDelete} >Delete Review</button>
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    return(
      <div>
      <ErrorList errors={ this.props.errors }
         clearErrors={this.props.clearErrors} />
      <div className='center flex-box'>
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
    </div>
    );
  }

}

export default ReviewForm;
