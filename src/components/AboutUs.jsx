import React, { useState } from 'react';
import '../css/aboutus.css';

export const AboutUs = () => {
  const [expandedCards, setExpandedCards] = useState([]);
  const [selectedRating, setSelectedRating] = useState(0);
  const [feedbackText, setFeedbackText] = useState('');
  const [showFeedbackMessage, setShowFeedbackMessage] = useState(false);

  const toggleCard = (index) => {
    setExpandedCards(prev => prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]);
  };

  const closeAllCards = () => {
    setExpandedCards([]);
  };

  const handleStarClick = (rating) => {
    setSelectedRating(rating);
  };

  const handleSubmitFeedback = () => {
    if (selectedRating === 0 || feedbackText.trim() === '') {
      alert('Please select a rating and write feedback.');
      return;
    }
    console.log('Rating:', selectedRating);
    console.log('Feedback:', feedbackText);
    setShowFeedbackMessage(true);
    setFeedbackText('');
    setSelectedRating(0);
    setTimeout(() => setShowFeedbackMessage(false), 3000);
  };

  return (
    <div className="about-us-cards">
      <div className={`card ${expandedCards.includes(0) ? 'expanded' : ''}`}>
        <div className="card-header">
          <h1>What is this website?</h1>
          <button className={`toggle-btn ${expandedCards.includes(0) ? 'rotated' : ''}`} onClick={() => toggleCard(0)}>v</button>
        </div>
        <div className="toggle-content" style={{ display: expandedCards.includes(0) ? 'block' : 'none', maxHeight: expandedCards.includes(0) ? '1000px' : '0' }}>
          <p>This website teaches you how to defuse a bomb in the game "Keep Talking and Nobody Explodes".</p>
          <p>It also contains an API called <a href="https://dog.ceo/dog-api/">DogAPI</a></p>
        </div>
      </div>

      <div className={`card ${expandedCards.includes(1) ? 'expanded' : ''}`}>
        <div className="card-header">
          <h1>Who are we?</h1>
          <button className={`toggle-btn ${expandedCards.includes(1) ? 'rotated' : ''}`} onClick={() => toggleCard(1)}>v</button>
        </div>
        <div className="toggle-content" style={{ display: expandedCards.includes(1) ? 'block' : 'none', maxHeight: expandedCards.includes(1) ? '1000px' : '0' }}>
          <p>We are polish students from a technical high school called SCI, which is located in Szczecin.</p>
        </div>
      </div>

      <div className={`card ${expandedCards.includes(2) ? 'expanded' : ''}`}>
        <div className="card-header">
          <h1>What is "Keep Talking and Nobody Explodes"?</h1>
          <button className={`toggle-btn ${expandedCards.includes(2) ? 'rotated' : ''}`} onClick={() => toggleCard(2)}>v</button>
        </div>
        <div className="toggle-content" style={{ display: expandedCards.includes(2) ? 'block' : 'none', maxHeight: expandedCards.includes(2) ? '1000px' : '0' }}>
          <p>"Keep Talking and Nobody Explodes" is a cooperative party game.</p>
          <p>One player tries to defuse a bomb using instructions from others who read the manual.</p>
          <p>The game challenges communication and problem-solving skills under time pressure.</p>
          <p><a href="https://store.steampowered.com/app/341800/Keep_Talking_and_Nobody_Explodes/">Feel free to check it out here</a></p>
        </div>
      </div>

      <div className={`card ${expandedCards.includes(3) ? 'expanded' : ''}`}>
        <div className="card-header">
          <h1>What is DogAPI?</h1>
          <button className={`toggle-btn ${expandedCards.includes(3) ? 'rotated' : ''}`} onClick={() => toggleCard(3)}>v</button>
        </div>
        <div className="toggle-content" style={{ display: expandedCards.includes(3) ? 'block' : 'none', maxHeight: expandedCards.includes(3) ? '1000px' : '0' }}>
          <p>DogAPI is a free API that provides random dog images and facts.</p>
          <p>This site uses DogAPI to fetch and display cute dog pictures for fun and relaxation.</p>
          <p>You can learn more at <a href="https://dog.ceo/dog-api/">dog.ceo/dog-api</a>.</p>
        </div>
      </div>

      <button id="closeAllBtn" onClick={closeAllCards}>Close All</button>

      <section className="feedback-card">
        <h2>Give us feedback!</h2>
        <div className="stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} className={`star ${selectedRating >= star ? 'selected' : ''}`} onClick={() => handleStarClick(star)}>★</span>
          ))}
        </div>
        <textarea id="feedbackText" rows="4" placeholder="Write your feedback here..." value={feedbackText} onChange={(e) => setFeedbackText(e.target.value)}></textarea>
        <button id="submitFeedback" onClick={handleSubmitFeedback}>Submit Feedback</button>
        {showFeedbackMessage && <p id="feedbackMessage">Thanks for your feedback!</p>}
      </section>
    </div>
  );
};
