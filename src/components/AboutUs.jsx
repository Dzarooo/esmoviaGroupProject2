import React, { useState } from 'react';

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
    <div className="my-5 flex flex-col items-center gap-5">
      <div className="w-[600px] bg-gray-100 border-2 border-gray-300 rounded-xl shadow-md p-2.5">
        <div className="flex justify-between items-center">
            <h1 className="text-xl m-0">What is this website?</h1>
            <button className={`bg-transparent border-none text-2xl cursor-pointer transition-transform duration-300 ${expandedCards.includes(0) ? 'rotate-180' : ''}`} onClick={() => toggleCard(0)}>v</button>
        </div>
        <div className={`overflow-hidden transition-all duration-500 ${expandedCards.includes(0) ? 'max-h-[500px] mt-2.5 block' : 'max-h-0 mt-0 hidden'}`}>
          <p className="my-1">This website teaches you how to defuse a bomb in the game "Keep Talking and Nobody Explodes".</p>
          <p className="my-1">It also contains an API called <a href="https://dog.ceo/dog-api/" className="text-black visited:text-black">DogAPI</a></p>
        </div>
      </div>

      <div className="w-[600px] bg-gray-100 border-2 border-gray-300 rounded-xl shadow-md p-2.5">
        <div className="flex justify-between items-center">
            <h1 className="text-xl m-0">Who are we?</h1>
            <button className={`bg-transparent border-none text-2xl cursor-pointer transition-transform duration-300 ${expandedCards.includes(1) ? 'rotate-180' : ''}`} onClick={() => toggleCard(1)}>v</button>
        </div>
        <div className={`overflow-hidden transition-all duration-500 ${expandedCards.includes(1) ? 'max-h-[500px] mt-2.5 block' : 'max-h-0 mt-0 hidden'}`}>
            <p className="my-1">We are polish students from a technical high school called SCI, which is located in Szczecin.</p></div>
      </div>

      <div className="w-[600px] bg-gray-100 border-2 border-gray-300 rounded-xl shadow-md p-2.5">
        <div className="flex justify-between items-center">
            <h1 className="text-xl m-0">What is "Keep Talking and Nobody Explodes"?</h1>
            <button className={`bg-transparent border-none text-2xl cursor-pointer transition-transform duration-300 ${expandedCards.includes(2) ? 'rotate-180' : ''}`} onClick={() => toggleCard(2)}>v</button>
        </div>
        <div className={`overflow-hidden transition-all duration-500 ${expandedCards.includes(2) ? 'max-h-[500px] mt-2.5 block' : 'max-h-0 mt-0 hidden'}`}>
          <p className="my-1">"Keep Talking and Nobody Explodes" is a cooperative party game.</p>
          <p className="my-1">One player tries to defuse a bomb using instructions from others who read the manual.</p>
          <p className="my-1">The game challenges communication and problem-solving skills under time pressure.</p>
          <p className="my-1"><a href="https://store.steampowered.com/app/341800/Keep_Talking_and_Nobody_Explodes/" className="text-black visited:text-black">Feel free to check it out here</a></p>
        </div>
      </div>

      <div className="w-[600px] bg-gray-100 border-2 border-gray-300 rounded-xl shadow-md p-2.5">
        <div className="flex justify-between items-center">
            <h1 className="text-xl m-0">What is DogAPI?</h1>
            <button className={`bg-transparent border-none text-2xl cursor-pointer transition-transform duration-300 ${expandedCards.includes(3) ? 'rotate-180' : ''}`} onClick={() => toggleCard(3)}>v</button>
        </div>
        <div className={`overflow-hidden transition-all duration-500 ${expandedCards.includes(3) ? 'max-h-[500px] mt-2.5 block' : 'max-h-0 mt-0 hidden'}`}>
          <p className="my-1">DogAPI is a free API that provides random dog images and facts.</p>
          <p className="my-1">This site uses DogAPI to fetch and display cute dog pictures for fun and relaxation.</p>
          <p className="my-1">You can learn more at <a href="https://dog.ceo/dog-api/" className="text-black visited:text-black">dog.ceo/dog-api</a>.</p>
        </div>
      </div>

      <button className="appearance-none rounded-lg border-2 border-gray-300 py-1 px-2 text-sm" onClick={closeAllCards}>Close All</button>

      <section className="w-[600px] bg-gray-100 border-2 border-gray-300 rounded-xl shadow-md p-5 flex flex-col gap-2.5 mb-5">
        <h2 className="text-xl m-0 mb-2.5 text-center">Give us feedback!</h2>
        <div className="flex justify-center gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} className={`text-3xl cursor-pointer transition-colors duration-200 ${selectedRating >= star ? 'text-yellow-400' : 'text-gray-300'}`} onClick={() => handleStarClick(star)}>★</span>
          ))}
        </div>
        <textarea className="w-full h-20 p-2 text-sm resize-y rounded-lg border border-gray-300 box-border" placeholder="Write your feedback here..." value={feedbackText} onChange={(e) => setFeedbackText(e.target.value)}></textarea>
        <button className="py-2.5 px-4 text-base border-none rounded-lg bg-gradient-to-b from-[#fc3c11] to-[#ff6f1b] text-white cursor-pointer transition-all duration-300 shadow-md hover:-translate-y-0.5 hover:shadow-lg" onClick={handleSubmitFeedback}>Submit Feedback</button>
        {showFeedbackMessage && <p className="text-center">Thanks for your feedback!</p>}
      </section>
    </div>
  );
};
