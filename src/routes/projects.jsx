import { For } from 'solid-js';
import { ExternalLink, GitHubIcon } from '~/components/icons';
import { github } from '~/socials.json';
import projects from '~/projects.json';

const Projects = () => {
  return (
    <main class='flex w-full flex-col items-center p-5 text-black dark:text-white'>
      <div class='grid grid-cols-1 gap-6 lg:grid-cols-2 xl:w-4/5 2xl:w-3/5'>
        <For each={projects}>
          {({ title, href, description, stack }) => (
            <div class='h-fit rounded-xl border bg-surface-light p-4 dark:bg-surface-dark'>
              <div class='mb-3 inline-flex items-center gap-1 text-lg font-semibold'>
                {title}
                <a class='text-primary' href={href} target='_blank'>
                  <ExternalLink />
                </a>
              </div>
              <p class='mb-4'>{description}</p>
              <p class='mb-5 text-zinc-500'>[ Image(s) placeholder ]</p>
              <ul class='inline-flex gap-2'>
                <For each={stack}>
                  {(entry) => (
                    <li class='rounded-full border bg-surface-lighter px-3 py-1 text-zinc-600 dark:bg-surface-darker dark:text-zinc-400'>
                      {entry}
                    </li>
                  )}
                </For>
              </ul>
            </div>
          )}
        </For>
      </div>
      <p class='mt-8'>
        Find more projects on{' '}
        <a
          class='inline-flex items-center gap-1 font-semibold text-primary'
          href={github}
          target='_blank'
        >
          <GitHubIcon />
          GitHub
        </a>
      </p>
    </main>
  );
};

export default Projects;
