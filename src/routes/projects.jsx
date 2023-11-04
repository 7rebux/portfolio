import { For, Show, createSignal, createEffect } from 'solid-js';
import { Portal } from 'solid-js/web';
import { ExternalLinkIcon, GitHubIcon } from '~/components/icons';
import clickOutside from '~/directives/clickOutside';
import projects from '~/data/projects.json';
import { github } from '~/data/socials.json';

const languageToColor = {
  TypeScript: 'text-[#007ACC] border-[#007ACC]',
  JavaScript: 'text-[#f7df1e] border-[#f7df1e]',
  Sass: 'text-[#c69] border-[#c69]',
  Kotlin: 'text-[#B125EA] border-[#B125EA]',
  Zig: 'text-[#f7a41d] border-[#f7a41d]',
};

const Projects = () => {
  const [preview, setPreview] = createSignal(null);

  // This is necessary to prevent unused import cleanup
  clickOutside;

  // Prevent scrolling on small screens if preview is open
  createEffect(() => {
    document.body.style.overflow = preview() ? 'hidden' : 'visible';
  }, preview);

  return (
    <div class='flex w-full flex-col items-center text-black dark:text-white'>
      {/* Project list */}
      <div class='columns-1 gap-6 lg:columns-2'>
        <For each={projects}>
          {({ title, href, images, description, stack }) => (
            <div class='mb-6 inline-block h-fit w-full rounded-xl border bg-surface-light p-4 dark:bg-surface-dark'>
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
                <div class='mb-4 flex select-none snap-x snap-mandatory gap-4 overflow-x-auto'>
                  <For each={images}>
                    {(src) => (
                      <div class='shrink-0 snap-center snap-always'>
                        <img
                          onclick={() => setPreview(src)}
                          class='max-h-[200px] cursor-pointer rounded-lg border'
                          src={src}
                          draggable={false}
                          alt='Project preview small image'
                        />
                      </div>
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
            <img
              use:clickOutside={() => setPreview(null)}
              src={preview()}
              alt='Project preview large image'
            />
          </div>
        </Show>
      </Portal>
    </div>
  );
};

export default Projects;
