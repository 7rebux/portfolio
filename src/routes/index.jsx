import { A } from 'solid-start';
import socials from '~/data/socials.json';

const About = () => {
  return (
    <div class='mx-0 mt-8 flex flex-col gap-10 sm:mt-0 4xl:mx-64'>
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
          <div class='max-w-[60ch] text-black dark:text-white'>
            <p>
              {/* TODO: Update text */}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste enim rem, laudantium
              nostrum aut ea nihil deserunt omnis corporis vitae obcaecati quidem a soluta, sed
              adipisci, atque cupiditate? Cupiditate, vel?
            </p>
          </div>
        </div>
        <div class='flex w-full justify-center sm:w-fit'>
          {/* TODO: Replace this with an image */}
          {/* TODO: Add fancy animation */}
          <div class='h-40 w-40 rounded-full border-2 bg-surface-light dark:bg-surface-dark' />
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
        <img
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
      <div class='flex flex-col gap-2'>
        <p class='text-lg text-black dark:text-white'>Latest Blog Posts</p>
        <div>
          <p class='text-zinc-400 dark:text-zinc-600'>Coming soon</p>
        </div>
      </div>
    </div>
  );
};

export default About;
