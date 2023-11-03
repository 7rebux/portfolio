import { CalenderIcon, PersonIcon } from '~/components/icons.jsx';

export function PostHeader({ title, description, date, author }) {
  return (
    <div class='mt-6 flex flex-col items-center sm:mt-0 sm:items-start'>
      <h1 class='m-0 mb-4'>{title}</h1>
      <h4 class='m-0'>{description}</h4>
      <div class='inline-flex gap-6'>
        <div class='inline-flex items-center gap-2'>
          <CalenderIcon />
          <p>{date}</p>
        </div>
        <p>•</p>
        <div class='inline-flex items-center gap-2'>
          <PersonIcon />
          <p>{author}</p>
        </div>
      </div>
      <hr class='my-2 w-full' />
    </div>
  );
}
