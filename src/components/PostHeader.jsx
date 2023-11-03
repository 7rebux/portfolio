import { CalenderIcon, PersonIcon } from '~/components/icons.jsx';

export function PostHeader({ title, description, date, author }) {
  return (
    <div class='flex flex-col gap-3'>
      <div>
        <h1>{title}</h1>
        <i>{description}</i>
      </div>
      <div class='inline-flex gap-6'>
        <div class='inline-flex items-center gap-2'>
          <CalenderIcon />
          <i>{date}</i>
        </div>
        <div class='inline-flex items-center gap-2'>
          <PersonIcon />
          <i>{author}</i>
        </div>
      </div>
    </div>
  );
}
