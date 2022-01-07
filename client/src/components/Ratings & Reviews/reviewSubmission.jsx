import React from 'react';
import Rating from '@mui/material/Rating';
import { PortalWithState } from 'react-portal';

class ReviewSubmission extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
      <form>
        <label>
        <h1>Add Your Review</h1>
        <Rating className="user-review-star-rating" defaultValue={0} precision={1}/>
        <div className="user-review-recommend">{"Do you recommend this product? "}
          <select>
            <option>{null}</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div className="user-review-characteristics">
          <div className="user-review-size">{"Size "}
            <select>
              <option value="0">{null}</option>
              <option value="1">A size too small</option>
              <option value="2">½ a size too small</option>
              <option value="3">Perfect</option>
              <option value="4">½ a size too big</option>
              <option value="5">A size too wide</option>
            </select>
          </div>
          <div className="user-review-width">{"Width "}
            <select>
              <option value="0">{null}</option>
              <option value="1">Too narrow</option>
              <option value="2">Slightly narrow</option>
              <option value="3">Perfect</option>
              <option value="4">Slightly wide</option>
              <option value="5">Too wide</option>
            </select>
          </div>
          <div className="user-review-width">{"Comfort "}
            <select>
              <option value="0">{null}</option>
              <option value="1">Uncomfortable</option>
              <option value="2">Slightly uncomfortable</option>
              <option value="3">Ok</option>
              <option value="4">Comfortable</option>
              <option value="5">Perfect</option>
            </select>
          </div>
          <div className="user-review-width">{"Quality "}
            <select>
              <option value="0">{null}</option>
              <option value="1">Poor</option>
              <option value="2">Below Average</option>
              <option value="3">What I expected</option>
              <option value="4">Pretty great</option>
              <option value="5">Perfect</option>
            </select>
          </div>
          <div className="user-review-width">{"Length "}
            <select>
              <option value="0">{null}</option>
              <option value="1">Runs short</option>
              <option value="2">Runs slightly short</option>
              <option value="3">Perfect</option>
              <option value="4">Runs slightly long</option>
              <option value="5">Runs long</option>
            </select>
          </div>
        </div>
        <div className="user-review-width">{"Fit "}
            <select>
              <option value="0">{null}</option>
              <option value="1">Runs tight</option>
              <option value="2">Runs slightly tight</option>
              <option value="3">Perfect</option>
              <option value="4">Runs slightly long</option>
              <option value="5">Runs long</option>
            </select>
          </div>
        <div className="user-review-summary">Review Summary
          <input placeholder="Summarize your review." maxLength="60"></input>
        </div>
        <div className="user-review-body">Why did you like the product or not?
          <input placeholder="Write your review here." maxLength="1000"></input>
        </div>
        <div className="user-review-upload-photos">Upload Photos</div>
        <div className="user-review-nickname">What's your nickname?
          <input placeholder="Example: jackson11!" maxLength="60"></input>
        </div>
        <div className="user-review-email">Your email
          <input placeholder="Example: jackson11@email.com" maxLength="60"></input>
        </div>
        <div className="user-review-authentication">{'(For authentication reasons, you will not be emailed)'}</div>
        <button>Submit</button>
        </label>
      </form>
    )
  }
}

export default ReviewSubmission;