import eye from './icons/eye.svg';
import eyeOff from './icons/eye-off.svg';
import logout from './icons/logout.svg';

export const icons = {
  eye,
  eyeOff,
  logout,
};

const iconList = Object.keys(icons) as Array<keyof typeof icons>;

export type IconNamesType = (typeof iconList)[number];
