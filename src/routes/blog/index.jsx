import posts from '~/data/posts.json';
import { For } from 'solid-js';
import { A } from 'solid-start';

const Blog = () => {
  return (
    <div class='flex flex-col items-center text-black dark:text-white sm:items-start'>
      <p class='mb-4 text-3xl font-semibold text-black dark:text-white'>Recent posts</p>
      <div class='flex flex-col gap-2'>
        <For each={posts}>
          {({ name, date, path }) => (
            <div class='inline-flex items-center gap-6'>
              <p class='font-light text-zinc-700 dark:text-zinc-400'>{date}</p>
              <A href={`/blog${path}`}>
                <p>{name}</p>
              </A>
            </div>
          )}
        </For>
      </div>
    </div>
  );
};

export default Blog;
