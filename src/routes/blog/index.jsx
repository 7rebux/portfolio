import posts from '~/data/posts.json';
import { For } from 'solid-js';
import { A } from 'solid-start';

const Blog = () => {
  return (
    <div class='mt-6 flex flex-col items-center text-black dark:text-white sm:mt-0 sm:items-start'>
      <p class='mb-6 text-3xl font-semibold text-black dark:text-white'>Recent Posts</p>
      <div class='flex max-w-full flex-col gap-2'>
        <For each={posts}>
          {({ name, date, path }) => (
            <div class='inline-flex items-center gap-6 font-mono'>
              <p class='font-light text-zinc-700 dark:text-zinc-400'>{date}</p>
              <A
                href={`/blog${path}`}
                class='flex-1 truncate transition hover:text-primary'
                title={name}
              >
                {name}
              </A>
            </div>
          )}
        </For>
      </div>
    </div>
  );
};

export default Blog;
