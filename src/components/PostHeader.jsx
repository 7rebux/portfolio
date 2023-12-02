import { CalenderIcon } from '~/components/icons.jsx';

export function PostHeader({ title, description, date }) {
  return (
    <div class='mt-6 flex flex-col gap-4 sm:mt-0'>
      <div class='inline-flex items-center gap-2'>
        <CalenderIcon />
        <p class='m-0 text-sm'>{date}</p>
      </div>
      <h1 class='m-0'>{title}</h1>
      <h4 class='m-0'>{description}</h4>
      <hr class='my-2 w-full' />
    </div>
  );
}
