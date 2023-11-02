import posts from '~/data/posts.json';
import { For } from 'solid-js';
import { A } from 'solid-start';

const Blog = () => {
  return (
    <div class='flex flex-col items-center justify-center text-black dark:text-white'>
      <p class='text-[2rem] font-semibold'>🚧 Work In Progress</p>
      <For each={posts}>
        {({ name, date }) => (
          <A href={`./${name}`} class='inline-flex gap-2'>
            <p>{name}</p>
            <p>{date}</p>
          </A>
        )}
      </For>
    </div>
  );
};

export default Blog;
