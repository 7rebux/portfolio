import { For, Show } from 'solid-js';
import { ExternalLinkIcon, GitHubIcon } from '~/components/icons';
import { github } from '~/data/socials.json';
import projects from '~/data/projects.json';

const Projects = () => {
  return (
    <div class='flex w-full flex-col items-center text-black dark:text-white'>
      <div class='grid grid-cols-1 gap-6 lg:grid-cols-2'>
        <For each={projects}>
          {({ title, href, images, description, stack }) => (
            <div class='h-fit rounded-xl border bg-surface-light p-4 dark:bg-surface-dark'>
              <div class='mb-3 inline-flex items-center gap-1 text-lg font-semibold'>
                {title}
                <a class='text-primary' href={href} target='_blank'>
                  <ExternalLinkIcon />
                </a>
              </div>
              <p class='mb-4'>{description}</p>
              <Show
                when={images.length !== 0}
                fallback={<p class='mb-4 text-zinc-500'>No preview</p>}
              >
                <div class='drag mb-4 flex select-none gap-4 overflow-scroll'>
                  <For each={images}>
                    {(src) => (
                      <img
                        class='max-h-[200px] cursor-pointer rounded-lg'
                        src={src}
                        draggable={false}
                      />
                    )}
                  </For>
                </div>
              </Show>
              <ul class='inline-flex flex-wrap gap-2'>
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
    </div>
  );
};

export default Projects;
