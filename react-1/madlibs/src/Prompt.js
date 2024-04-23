import React from 'react';

/** A single prompt for madlibs.
 *
 * Shows the form inbox box, and updates parent as user enters into it.
 *
 */

function Prompt({changeAnswer, prompt}) {

  /** User has changed input box: update parent with value. */

  function handleChange(evt) {
    const {value} = evt.target;
    changeAnswer(prompt, value);
  }

  return (
      <div className="Prompt">
        <input placeholder={prompt}
                onChange={handleChange} />
      </div>
  );
}

export default Prompt;