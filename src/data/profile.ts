export const profile = {
  name: 'Niko Heino',
  initials: 'NH',
  title: 'Unreal Engine C++ Developer & Artist',
  tagline: 'I build modular, high performance C++ systems for games.',
  location: 'Available worldwide · Remote-friendly · Located in Turku, Finland',
  email: 'NikoHeino02@gmail.com',
  about: [
    "I'm a gameplay programmer specializing in Unreal Engine 5 and modern C++. While C++ is my speciality, I'm not a stranger to wearing multiple hats, ranging from shaders to technical animation.",
    "Outside of code, I paint, model, and design. That cross-disciplinary fluency is the thing I rely on most: it lets me prototype quickly, give meaningful feedback to artists, and reason about how technical decisions shape what players actually feel.",
  ],
  socials: [
    { label: 'GitHub', href: 'https://github.com/', icon: 'github' as const },
    { label: 'ArtStation', href: 'https://www.artstation.com/', icon: 'artstation' as const },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'linkedin' as const },
    { label: 'X', href: 'https://x.com/', icon: 'x' as const },
  ],
  stats: [
    { value: '3+', label: 'Years with Unreal' },
    { value: 'C++20', label: 'Daily driver' },
    { value: '∞', label: 'Coffee consumed' },
  ],
};

export type SocialIcon = 'github' | 'artstation' | 'linkedin' | 'x' | 'email';
