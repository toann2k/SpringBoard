import React from 'react';

/** Shows completed story. */

function Story({template, answers, restart}) {

  /** Turn template into resolved story. */

  function makeStory() {
    let story = template;

    for (let key in answers) {
      story = story.replace(`[${key}]`, answers[key]);
    }

    return story;

    // Not better, but perhaps interesting: the operation we're doing here,
    //   iterating over something and repeatedly replacing text in a string,
    //   is an example of a "reduction", so we could use the JS array.reduce()
    //   method.
    //
    // This is "clever", but is slower and less readable.
    //
    //
    // return Object.keys(answers).reduce((story, key) =>
    //     story.replace(`[${key}]`, answers[key]), template);
  }

  return (
      <div className="Story">
        <p> {makeStory()} </p>
        <button onClick={restart}>Restart</button>
      </div>
  );
}

export default Story;