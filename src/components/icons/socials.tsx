import {
  IconFacebook,
  IconInstagram,
  IconTiktok,
  IconTwitter,
} from '@/components/icons';

export interface Social {
  name: string;
  icon: JSX.Element;
}
export const SocialIcons: Social[] = [
  {
    name: 'facebook',
    icon: <IconFacebook className="fill-primary" />,
  },
  {
    name: 'twitter',
    icon: <IconTwitter className="fill-primary" />,
  },
  {
    name: 'tiktok',
    icon: <IconTiktok className="fill-primary" />,
  },
  {
    name: 'instagram',
    icon: <IconInstagram className="fill-primary" />,
  },
];
