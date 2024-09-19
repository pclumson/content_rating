
import React, { Component } from 'react';
import './ContentRating.css';



class ContentRating extends Component {

  constructor() {

    super();

    this.state = {
      likes: 0,
      dislikes: 0,
      totalRatings: 0,

      handleLike: () => {
        this.setState((prevState) => ({
          likes: prevState.likes + 1,
          totalRatings: prevState.totalRatings + 1
        }));
      },

      handleDislike: () => {
        this.setState((prevState) => ({
          dislikes: prevState.dislikes + 1,
          totalRatings: prevState.totalRatings + 1
        }));
      }


    };
  }


  render() {

    return (

     <>

     <div className='content-rating'>

      <p>

        My name is Prince and I am a software engineer.


      </p>

      <div className='rating-buttons'>

        <button className="like-button">
          Like ({this.state.likes})
        </button>

        <button className="dislike-button">
          Dislike ({this.state.dislikes})
        </button>

      </div>


     </div>

     </>
    );
  }
}

export default ContentRating;
