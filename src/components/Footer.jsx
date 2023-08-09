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
    <footer class='mt-auto flex flex-col sm:flex-row gap-5 sm:gap-0 justify-around items-center p-10 border-t border-zinc-200 dark:border-t-zinc-600 bg-surface-light dark:bg-surface-dark'>
      {/* Flag */}
      <p class='flex-grow basis-0 text-center' title='Germany'>
        🇩🇪
      </p>

      {/* Copyright */}
      <p class='text-sm text-zinc-500'>&copy; 2023 Nils Osswald. All rights reserved.</p>

      {/* Socials */}
      <div class='inline-flex flex-grow basis-0 gap-4 justify-center'>
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
