import { CalenderIcon, PersonIcon } from '~/components/icons.jsx';

export function PostHeader(props) {
  return (
    <div class='flex flex-col gap-3'>
      <div>
        <h1>{props.title}</h1>
        <i>{props.description}</i>
      </div>
      <div class='inline-flex gap-6'>
        <div class='inline-flex items-center gap-2'>
          <CalenderIcon />
          <i>{props.date}</i>
        </div>
        <div class='inline-flex items-center gap-2'>
          <PersonIcon />
          <i>{props.author}</i>
        </div>
      </div>
    </div>
  );
}
