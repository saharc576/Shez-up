import React from 'react';
import Popup from 'reactjs-popup';
import'./ModalStyles.css';




export default () => (
  <Popup
    trigger={<button className="button"> Forum Rules! </button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> Please read before posting a message! </div>
        <div className="content">
        <p>1. Be nice. We love the atmosphere, and we love seeing how much everyone enjoys helping one another.</p>  
        <p>2. Do not repeat questions. Use the forum search. There's a great chance that someone has already solved the problem that you are facing.</p>
        <p>3. Use meaningful titles. ‘How can I create a collapsing and expanding repeater?’ is a much better title than ‘Help please!’.</p>
        <p>4. Use Labels. makes it #easy #to #follow #topics.</p>
        <p>5. Multiple short posts are better than a long one. Keeping posts short makes it easy to find answers.</p>
        <p>6. Keep questions focused and clear. This will make each question easier to solve, which makes it possible for more people to answer it.</p>
        <p>7. Format the text in your question. Use Code blocks, bullets, etc. to make it easier to understand.</p>
        <p>8. Refrain from posting a long code. Debugging code is difficult enough when it's a short one. Post only relevant part of code.</p>
        <p>9. Provide as many details as possible. Share what you think is right, what you’ve tried to do, and what blocks you. Include any relevant screenshots, code, and URLs to make it easier for others to understand the problem.</p>
        <p>10. Last but not least: WORK HARD, PLAY HARDER!. Have fun in the process ;)</p>
        </div>
        <div className="actions">
          <button
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            close 
          </button>
        </div>
      </div>
    )}
  </Popup>
);