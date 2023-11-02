import { useParams } from '@solidjs/router';
import { lazy } from 'solid-js';

export default function Post() {
  const params = useParams();

  const Content = lazy(() =>
    import(/* @vite-ignore */ `../../data/posts/${params.post}.mdx`).catch(() => <p>Not found</p>)
  );

  return (
    <article class='prose prose-zinc max-w-none dark:prose-invert'>
      <Content />
    </article>
  );
}
