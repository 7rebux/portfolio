import SkillIcon from '../components/SkillIcon';
import socials from '../data/socials.json';
import posts from '../data/posts.json';
import { For } from 'solid-js';
import { A } from '@solidjs/router';

export default function About() {
  return (
    <div className='mx-0 mt-8 flex flex-col gap-10 sm:mt-0 4xl:mx-48'>
      {/* Introduction */}
      <div className='flex flex-col-reverse justify-between gap-10 sm:flex-row'>
        <div className='flex flex-col gap-10 text-center sm:text-left'>
          <div className='text-4xl font-bold leading-snug text-black dark:text-white'>
            <p>Hey There! 👋</p>
            <p>
              I'm <span className='text-primary'>Nils</span>, A Full Stack
            </p>
            <p>Software Engineer</p>
          </div>
          <div className='text-black dark:text-white sm:max-w-[60ch]'>
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
        <div className='flex justify-center'>
          {/* TODO: Add fancy animation */}
          <img
            className='h-48 w-48 rounded-full border-2'
            draggable={false}
            src='/images/avatar.png'
            alt='A picture of myself'
          />
        </div>
      </div>

      {/* Buttons */}
      <div className='flex w-full justify-center gap-4 sm:justify-normal'>
        <a
          href={socials.email}
          className='min-w-[8rem] select-none rounded-lg bg-primary p-2 text-center text-black transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/50 dark:text-white'
        >
          Contact Me
        </a>
        <A
          href='/src/routes/projects'
          class='min-w-[8rem] select-none rounded-lg border border-primary p-2 text-center text-black transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/50 dark:text-white'
        >
          See My Work
        </A>
      </div>

      <hr />

      {/* Stack */}
      <div className='flex flex-col items-center gap-2 sm:items-start'>
        <SkillIcon
          src='https://skillicons.dev/icons?i=kotlin,java,js,ts,react,css,tailwind'
          alt='Stack'
        />
        <p className='text-zinc-600 dark:text-zinc-400'>
          View more in my{' '}
          <A class='text-primary' href='/src/routes/stack'>
            tech stack
          </A>
        </p>
      </div>

      <hr />

      {/* Blog posts */}
      <div className='flex flex-col items-center gap-2 text-black dark:text-white sm:items-start'>
        <p className='mb-3 text-xl font-semibold'>Latest Blog Posts</p>
        <div className='flex max-w-full flex-col gap-2 sm:text-start'>
          <For each={posts.slice(0, 3)}>
            {({ name, path }) => (
              <A href={`/blog${path}`} class='truncate transition hover:text-primary'>
                • {name}
              </A>
            )}
          </For>
          <p className='mb-10 mt-1 text-center text-zinc-600 dark:text-zinc-400 sm:text-start'>
            View all on my{' '}
            <A href='/blog' class='text-primary'>
              blog page
            </A>
          </p>
        </div>
      </div>
    </div>
  );
}
