import { For } from 'solid-js';
import { A, useLocation } from 'solid-start';

const routes = [
  { title: 'About', path: '/' },
  { title: 'Stack', path: '/stack' },
  { title: 'Projects', path: '/projects' },
  { title: 'Blog', path: '/blog' },
];

const Navbar = () => {
  const location = useLocation();

  const isActive = (route) => {
    return route === location.pathname
      ? 'text-primary font-semibold'
      : 'text-black dark:text-white';
  };

  return (
    <nav>
      <ul class='w-screen sm:w-min flex flex-col sm:flex-row px-3 sm:px-8 py-3 gap-6 sm:rounded-full bg-surface-light dark:bg-surface-dark'>
        <For each={routes}>
          {({ title, path }) => (
            <li class={isActive(path)}>
              <A href={path}>{title}</A>
            </li>
          )}
        </For>
      </ul>
    </nav>
  );
};

export default Navbar;
