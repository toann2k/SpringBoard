import React, {useState} from 'react';
import Prompt from './Prompt';

/** Collection of prompts for madlibs.
 *
 * Props:
 * - prompts: array of thing to ask for (eg, ['noun', 'noun 2', 'adjective']
 *
 * State:
 * - answers: {'noun': 'car', 'noun 2': 'bike', 'adjective': 'red'}
 *
 */

function PromptsForm({prompts, finishPrompts}) {
  const [promptForm, setPromptForm] = useState({});
  /** Update single answer. */

  function changeAnswer(prompt, val) {
    setPromptForm(f => ({...f, [prompt]: val}));
  }

  /** On form submission, send completed answers to Madlib parent */

  function handleSubmit(evt) {
    evt.preventDefault();
    finishPrompts(promptForm);
  }

  // Have we filled in every prompt?
  let notDone = (
    Object.keys(promptForm).length < prompts.length
  );

  return (
      <form className="Prompts" onSubmit={handleSubmit}>
        {prompts.map((p, i) => (
            <Prompt key={i}
                    prompt={p}
                    answer={promptForm[p]}
                    changeAnswer={changeAnswer} />
        ))}
        <button disabled={notDone}>Get Story</button>
      </form>
  );
}

export default PromptsForm;