import { For } from 'solid-js';
import stack from '~/data/stack.json';

const Stack = () => {
  return (
    <div class='mx-0 flex flex-col gap-4 4xl:mx-64'>
      <p class='text-3xl font-semibold text-black dark:text-white'>My Tech Stack</p>
      <div class='flex flex-col gap-3'>
        <For each={Object.entries(stack)}>
          {([group, entries]) => (
            <section class='flex flex-col gap-2'>
              <p class='text-lg font-semibold text-black dark:text-white'>{group}</p>
              <ul class='flex flex-col gap-4'>
                <For each={entries}>
                  {({ title, description, icon }) => (
                    <li class='flex items-start gap-2'>
                      <img class='mt-1' src={icon} />
                      <div>
                        <p class='text-black dark:text-white'>{title}</p>
                        <p class='text-zinc-700 dark:text-zinc-300'>{description}</p>
                      </div>
                    </li>
                  )}
                </For>
              </ul>
              <hr />
            </section>
          )}
        </For>
        <p class='mt-10 text-zinc-600 dark:text-zinc-400'>
          These are just the technologies I am most familiar with, but I am always eager to learn
          and try new things.
        </p>
      </div>
    </div>
  );
};

export default Stack;
