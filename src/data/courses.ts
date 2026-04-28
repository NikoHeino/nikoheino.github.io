export type CourseStatus = 'completed' | 'ongoing';

export interface Course {
  title: string;
  instructor?: string;
  platform?: string;
  status: CourseStatus;
  url?: string;
  note?: string;
}

export const courses: Course[] = [
  {
    title: 'Unreal Engine 5 C++ Developer: Learn C++ & Make Video Games',
    instructor: 'Stephen Ulibarri',
    platform: 'Udemy',
    status: 'completed',
    url: '#',
  },
  {
    title: 'Unreal Engine 5 — Gameplay Ability System — Top Down RPG',
    instructor: 'Stephen Ulibarri',
    platform: 'Udemy',
    status: 'completed',
    url: '#',
  },
  {
    title: 'Unreal Engine 5 C++ Multiplayer Shooter',
    instructor: 'Stephen Ulibarri',
    platform: 'Udemy',
    status: 'ongoing',
    url: '#',
  },
  {
    title: 'Professional Game Development in C++ and Unreal Engine',
    instructor: 'Tom Looman',
    platform: 'Udemy',
    status: 'ongoing',
    url: '#',
  },
];
