import { For } from 'solid-js';
import { ExternalLinkIcon, GitHubIcon } from '~/components/icons';
import { github } from '~/data/socials.json';
import projects from '~/data/projects.json';

const Projects = () => {
  return (
    <div class='flex w-full flex-col items-center text-black dark:text-white'>
      <div class='grid grid-cols-1 gap-6 lg:grid-cols-2'>
        <For each={projects}>
          {({ title, href, description, stack }) => (
            <div class='h-fit rounded-xl border bg-surface-light p-4 dark:bg-surface-dark'>
              <div class='mb-3 inline-flex items-center gap-1 text-lg font-semibold'>
                {title}
                <a class='text-primary' href={href} target='_blank'>
                  <ExternalLinkIcon />
                </a>
              </div>
              <p class='mb-4'>{description}</p>
              <div class='mb-4 flex gap-2 overflow-scroll'>
                <img
                  class='max-h-[200px] rounded-lg'
                  src='https://fastly.picsum.photos/id/1051/400/250.jpg?hmac=pPJwSAd-HgkNs8ceqM4dS1scqVWlnEpsvUVJ-6EYwPQ'
                />
                <img
                  class='max-h-[200px] rounded-lg'
                  src='https://fastly.picsum.photos/id/1051/400/250.jpg?hmac=pPJwSAd-HgkNs8ceqM4dS1scqVWlnEpsvUVJ-6EYwPQ'
                />
                <img
                  class='max-h-[200px] rounded-lg'
                  src='https://fastly.picsum.photos/id/1051/400/250.jpg?hmac=pPJwSAd-HgkNs8ceqM4dS1scqVWlnEpsvUVJ-6EYwPQ'
                />
              </div>
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
