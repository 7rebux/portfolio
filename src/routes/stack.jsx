import { For } from 'solid-js';
import stack from '~/data/stack.json';

const Stack = () => {
  return (
    <div class='text-black dark:text-white'>
      <p class='mb-8 text-3xl font-semibold'>Technologies I've been working with recently</p>
      <div class='flex flex-col gap-4'>
        <For each={Object.entries(stack)}>
          {([group, entries]) => (
            <section>
              <p class='text-lg font-semibold capitalize'>{group}</p>
              <ul>
                <For each={entries}>{(entry) => <li>{entry}</li>}</For>
              </ul>
            </section>
          )}
        </For>
      </div>
    </div>
  );
};

export default Stack;
