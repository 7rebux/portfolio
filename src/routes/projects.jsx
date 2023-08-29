import { For, Show, createSignal } from 'solid-js';
import { ExternalLinkIcon, GitHubIcon } from '~/components/icons';
import { github } from '~/data/socials.json';
import projects from '~/data/projects.json';
import clickOutside from '~/directives/clickOutside';

const languageToColor = {
  TypeScript: 'text-[#007ACC] border-[#007ACC]',
  JavaScript: 'text-[#f7df1e] border-[#f7df1e]',
  Sass: 'text-[#c69] border-[#c69]',
};

const Projects = () => {
  const [preview, setPreview] = createSignal(null);

  clickOutside;

  return (
    <div class='flex w-full flex-col items-center text-black dark:text-white'>
      {/* Project list */}
      <div class='grid grid-cols-1 gap-6 lg:grid-cols-2'>
        <For each={projects}>
          {({ title, href, images, description, stack }) => (
            <div class='h-fit rounded-xl border bg-surface-light p-4 dark:bg-surface-dark'>
              {/* Title */}
              <div class='mb-3 inline-flex items-center gap-1 text-lg font-semibold'>
                {title}
                <a class='text-primary' href={href} target='_blank'>
                  <ExternalLinkIcon />
                </a>
              </div>

              {/* Description */}
              <p class='mb-4'>{description}</p>

              {/* Images */}
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
                        onclick={() => setPreview(src)}
                      />
                    )}
                  </For>
                </div>
              </Show>

              {/* Stack */}
              <ul class='inline-flex flex-wrap gap-2'>
                <For each={stack}>
                  {(entry) => (
                    <li
                      class={`${
                        languageToColor[entry] ?? 'text-zinc-600 dark:text-zinc-400'
                      } rounded-full border bg-surface-lighter px-3 py-1 dark:bg-surface-darker`}
                    >
                      {entry}
                    </li>
                  )}
                </For>
              </ul>
            </div>
          )}
        </For>
      </div>

      {/* GitHub link */}
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

      {/* Image preview */}
      <Portal mount={document.getElementById('modal')}>
        <Show when={preview()}>
          <div class='flex h-screen w-screen items-center justify-center p-4 backdrop-blur-lg backdrop-brightness-75'>
            <img src={preview()} use:clickOutside={() => setPreview(null)} />
          </div>
        </Show>
      </Portal>
    </div>
  );
};

export default Projects;
