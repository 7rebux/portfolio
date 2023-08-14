import { For } from 'solid-js';
import { EmailIcon, GitHubIcon, LinkedInIcon } from './icons';
import { Dynamic } from 'solid-js/web';
import socialLinks from '~/data/socials.json';

const socials = [
  { title: 'GitHub', href: socialLinks.github, icon: GitHubIcon },
  { title: 'LinkedIn', href: socialLinks.linkedin, icon: LinkedInIcon },
  { title: 'E-Mail', href: socialLinks.email, icon: EmailIcon },
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
          {({ title, href, icon }) => (
            <a href={href} target='_blank' title={title}>
              <Dynamic
                component={icon}
                class='text-zinc-600 transition hover:scale-110 hover:text-black dark:text-zinc-400 hover:dark:text-white'
              />
            </a>
          )}
        </For>
      </div>
    </footer>
  );
};

export default Footer;
