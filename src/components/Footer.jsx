import { For } from 'solid-js';

const socials = [
  {
    title: 'GitHub',
    href: 'https://github.com/7rebux',
    icon: `bg-[url('/images/github-light.png')] dark:bg-[url('/images/github-dark.png')]`,
  },
  {
    title: 'LinkedIn',
    href: 'https://de.linkedin.com/',
    icon: `bg-[url('/images/linkedin-light.png')] dark:bg-[url('/images/linkedin-dark.png')]`,
  },
  {
    title: 'E-Mail',
    href: 'mailto:contact@nilsosswald.de',
    icon: `bg-[url('/images/email-light.png')] dark:bg-[url('/images/email-dark.png')]`,
  },
];

const Footer = () => {
  return (
    <footer class='mt-auto border-t border-t-zinc-200 dark:border-t-zinc-600 p-10 flex flex-col sm:flex-row items-center justify-around gap-5 sm:gap-0 bg-surface-light dark:bg-surface-dark'>
      <div class='flex-grow basis-0 inline-flex justify-center'>
        <p title='Germany'>🇩🇪</p>
      </div>
      <p class='text-sm text-zinc-500'>&copy; 2023 Nils Osswald. All rights reserved.</p>
      <div class='flex-grow basis-0 inline-flex justify-center gap-4'>
        <For each={socials}>
          {({ title, href, icon }) => (
            <a href={href} target='_blank' title={title}>
              <div class={`h-6 w-6 bg-cover ${icon}`} />
            </a>
          )}
        </For>
      </div>
    </footer>
  );
};

export default Footer;
