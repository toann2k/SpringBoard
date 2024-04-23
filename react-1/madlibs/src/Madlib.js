import React, {useState} from 'react';
import PromptsForm from './PromptsForm';
import Story from './Story';
import "./Madlib.css"

/** Madlib game:
 *
 * props:
 * - prompts: list of things to ask for: ["noun", "noun 2", "adjective"]
 * - template: story template, with placeholders in brackets
 *
 * state:
 * - answers: {noun: "car", "noun 2": "bike", "adjective": "red"}
 *
 */

function Madlib({prompts, template}) {

  const [answers, setAnswers] = useState(null);
  /** If have answers, render story, else render prompts. */

  return (
      <div className="Madlib">
        <h1>Madlibs!</h1>
        {answers
            ? <Story answers={answers}
                      template={template}
                      restart={() => setAnswers(null)} />

            : <PromptsForm prompts={prompts}
                            finishPrompts={setAnswers} />
        }
      </div>
  );
}

Madlib.defaultProps = {
  prompts: ["noun", "noun 2", "adjective", "color"],
  template: "There was a [color] [noun] who loved a [adjective] [noun 2].",
};


export default Madlib;