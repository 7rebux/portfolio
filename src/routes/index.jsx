import { A } from 'solid-start';
import SkillIcon from '~/components/SkillIcon';
import socials from '~/data/socials.json';
import posts from '~/data/posts.json';
import { For } from 'solid-js';

const About = () => {
  return (
    <div class='mx-0 mt-8 flex flex-col gap-10 sm:mt-0 4xl:mx-48'>
      {/* Introduction */}
      <div class='flex flex-col-reverse justify-between gap-10 sm:flex-row'>
        <div class='flex flex-col gap-10 text-center sm:text-left'>
          <div class='text-4xl font-bold leading-snug text-black dark:text-white'>
            <p>Hey There! 👋</p>
            <p>
              I'm <span class='text-primary'>Nils</span>, A Full Stack
            </p>
            <p>Software Engineer</p>
          </div>
          <div class='text-black dark:text-white sm:max-w-[60ch]'>
            <p>
              I'm a passionate software developer based in Germany. My journey in the world of
              programming began at the young age of 12, and since then, I've been dedicated to
              creating elegant and efficient applications. I have a deep appreciation for
              beautifully designed user interfaces and a strong commitment to optimizing efficiency
              and performance. My interests extend to algorithms, artificial intelligence, and the
              strategic world of chess. One of my greatest joys is building tools that simplify not
              only my life but also the lives of others. Let's connect and collaborate!
            </p>
          </div>
        </div>
        <div class='flex justify-center'>
          {/* TODO: Add fancy animation */}
          <img
            class='h-48 w-48 rounded-full border-2'
            draggable={false}
            src='/images/avatar.png'
            alt='A picture of myself'
          />
        </div>
      </div>

      {/* Buttons */}
      <div class='flex w-full justify-center gap-4 sm:justify-normal'>
        <a
          href={socials.email}
          class='min-w-[8rem] select-none rounded-lg bg-primary p-2 text-center text-black transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/50 dark:text-white'
        >
          Contact Me
        </a>
        <A
          href='/projects'
          class='min-w-[8rem] select-none rounded-lg border border-primary p-2 text-center text-black transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/50 dark:text-white'
        >
          See My Work
        </A>
      </div>

      <hr />

      {/* Stack */}
      <div class='flex flex-col items-center gap-2 sm:items-start'>
        <SkillIcon
          src='https://skillicons.dev/icons?i=kotlin,java,js,ts,react,css,tailwind'
          alt='Stack'
        />
        <p class='text-zinc-600 dark:text-zinc-400'>
          View more in my{' '}
          <A class='text-primary' href='/stack'>
            tech stack
          </A>
        </p>
      </div>

      <hr />

      {/* Blog posts */}
      <div class='flex flex-col items-center gap-2 text-black dark:text-white sm:items-start'>
        <p class='mb-3 text-xl font-semibold'>Latest Blog Posts</p>
        <div class='flex max-w-full flex-col gap-2 sm:text-start'>
          <For each={posts.slice(0, 3)}>
            {({ name, path }) => (
              <A href={`/blog${path}`} class='truncate transition hover:text-primary'>
                • {name}
              </A>
            )}
          </For>
          <p class='mb-10 mt-1 text-center text-zinc-600 dark:text-zinc-400 sm:text-start'>
            View all on my{' '}
            <A href='/blog' class='text-primary'>
              blog page
            </A>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
