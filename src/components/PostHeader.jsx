import { CalenderIcon } from '~/components/icons.jsx';
import { Meta, Title } from '@solidjs/meta';

export function PostHeader({ title, description, date }) {
  return (
    <>
      {/* Meta tags */}
      <Title>{title}</Title>
      <Meta name='title' content={title} />
      <Meta name='description' content={description} />
      <Meta property='og:title' content={title} />
      <Meta property='og:description' content={description} />
      <Meta property='twitter:title' content={title} />
      <Meta property='twitter:description' content={description} />

      {/* Actual header */}
      <div class='mt-6 flex flex-col gap-4 sm:mt-0'>
        <div class='inline-flex items-center gap-2'>
          <CalenderIcon />
          <p class='m-0 text-sm'>{date}</p>
        </div>
        <h1 class='m-0'>{title}</h1>
        <h4 class='m-0'>{description}</h4>
        <hr class='my-2 w-full' />
      </div>
    </>
  );
}
