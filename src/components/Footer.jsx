import { For } from 'solid-js';
import { EmailIcon, GitHubIcon, LinkedInIcon } from './icons';

const socials = [
  { title: 'GitHub', href: 'https://github.com/7rebux', Icon: GitHubIcon },
  { title: 'LinkedIn', href: 'https://de.linkedin.com/', Icon: LinkedInIcon },
  { title: 'E-Mail', href: 'mailto:contact@nilsosswald.de', Icon: EmailIcon },
];

const Footer = () => {
  return (
    <footer class='mt-auto flex flex-col items-center justify-around gap-5 border-t bg-surface-light p-10 dark:bg-surface-dark sm:flex-row sm:gap-0'>
      {/* Flag */}
      <p class='flex-grow basis-0 text-center' title='Germany'>
        🇩🇪
      </p>

      {/* Copyright */}
      <p class='text-sm text-zinc-500'>&copy; 2023 Nils Osswald. All rights reserved.</p>

      {/* Socials */}
      <div class='inline-flex flex-grow basis-0 justify-center gap-4'>
        <For each={socials}>
          {({ title, href, Icon }) => (
            <a href={href} target='_blank' title={title}>
              <Icon class='text-zinc-600 transition hover:scale-110 hover:text-black dark:text-zinc-400 hover:dark:text-white' />
            </a>
          )}
        </For>
      </div>
    </footer>
  );
};

export default Footer;
