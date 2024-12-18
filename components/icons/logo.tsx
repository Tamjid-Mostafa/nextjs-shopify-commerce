import clsx from 'clsx';

export default function LogoIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label={`${process.env.SITE_NAME} logo`}
      viewBox="0 0 64 64"
      {...props}
      className={clsx('h-4 w-4 fill-black dark:fill-white', props.className)}
    >
      <path d="M57.5 22.3c-.3-4.8-4.1-8.7-8.9-9.3C46.6 7.6 41.4 4 35.5 4 30.1 4 25.3 7 23 11.7 16.2 7.5 3.3 11.1 3.5 23.8 1.6 25.7 0 28.3 0 31c0 5.5 4.5 10 10 10h3v-2h-3c-4.4 0-8-3.6-8-8 0-4.1 3.1-6.3 3.1-6.3-1.5-9.6 9.7-16.8 18.3-9.9 0 0 2.4-8.8 11.6-8.8 9.3 0 11.6 9 11.6 9 3.2-.3 8.6 2.3 8.4 8.6 0 0 5 2 5 7.4 0 4.4-3.6 8-8 8h-4v2h4c5.5 0 10-4.5 10-10 0-3.6-1.9-6.9-5-8.7zM7.5 23h2c0-3.9 3.1-7 7-7v-2c-4.4 0-8.4 4-8.4 9z" />
      <path d="M51.5 22h-7.9l-1.3 10.2h-3.8v2h3.6L40.5 47H18.4l-1.8-14h1.9v-2h-4.1l2.3 18h23.6l-.6 5h-2.3c-.4-1.7-2-3-3.9-3s-3.4 1.3-3.9 3h-2.3c-.4-1.7-2-3-3.9-3s-3.4 1.3-3.9 3h-3.1v2h3.1c.4 1.7 2 3 3.9 3s3.4-1.3 3.9-3h2.3c.4 1.7 2 3 3.9 3s3.4-1.3 3.9-3h4l4-32h6.1V22zM23.5 57c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM33.5 57c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
      <rect x="19.5" y="28" width="2" height="8" />
      <rect x="23.5" y="23" width="2" height="13" />
      <rect x="27.5" y="26" width="2" height="10" />
      <rect x="31.5" y="20" width="2" height="16" />
      <rect x="35.5" y="17" width="2" height="19" />
    </svg>
  );
}
