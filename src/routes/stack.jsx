import { For } from 'solid-js';
import stack from '~/data/stack.json';

const Stack = () => {
  return (
    <div class='flex flex-col gap-4'>
      <p class='text-3xl font-semibold text-black dark:text-white'>My Tech Stack</p>
      <div class='flex flex-col gap-3'>
        <For each={Object.entries(stack)}>
          {([group, entries]) => (
            <section class='flex flex-col gap-2'>
              <p class='text-lg font-semibold text-black dark:text-white'>{group}</p>
              <ul class='flex flex-col gap-2'>
                <For each={entries}>
                  {({ title, description, icon }) => (
                    <li class='flex items-start gap-2'>
                      <img src={icon} />
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
      </div>
    </div>
  );
};

export default Stack;
