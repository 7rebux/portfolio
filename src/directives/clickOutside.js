import { onCleanup } from 'solid-js';

const clickOutside = (element, accessor) => {
  const onClick = (event) => !element.contains(event.target) && accessor()?.();

  document.body.addEventListener('click', onClick);

  onCleanup(() => {
    document.body.removeEventListener('click', onClick);
  });
};

export default clickOutside;
