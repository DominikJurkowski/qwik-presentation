import { component$, useStore, useStylesScoped$ } from '@builder.io/qwik';
import styles from './simple.css?inline';

export default component$(() => {
  useStylesScoped$(styles);
  const state = useStore({ name: 'World' });

  return (
    <>
      <div id="container">
        <button
          onClick$={() => {
            // The click handler is completely stateless, and does not use any QWIK api.
            // Meaning, the qwik runtime is NEVER downloaded, nor executed
            console.log('click');
            const div = document.querySelector('#section')! as HTMLElement;
            div.style.background = '#ac7ff4';
          }}
        >
          Action
        </button>
        <input
          value={state.name}
          placeholder='Write some text'
          onInput$={(event) => {
            const input = event.target as HTMLInputElement;
            state.name = input.value;
          }}
        >
        </input>
      </div>
    </>
  );
});