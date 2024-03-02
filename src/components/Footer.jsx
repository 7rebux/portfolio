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
    <footer class='border-t bg-surface-light dark:bg-surface-dark lg:px-20 xl:px-40 2xl:px-60'>
      <div class='flex flex-col items-center justify-between gap-5 px-4 py-10 sm:flex-row'>
        {/* Flag */}
        <p class='flex-grow basis-0' title='Germany'>
          &#x1f1e9;&#x1f1ea;
        </p>

        {/* Copyright */}
        <p class='text-sm text-zinc-500'>&copy; 2023 Nils Osswald. All rights reserved.</p>

        {/* Social links */}
        <div class='inline-flex flex-grow basis-0 justify-end gap-4'>
          <For each={socials}>
            {({ title, href, icon }) => (
              <a href={href} target='_blank' title={title}>
                <Dynamic
                  component={icon}
                  class='text-zinc-600 transition hover:text-black dark:text-zinc-400 hover:dark:text-white'
                />
              </a>
            )}
          </For>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
