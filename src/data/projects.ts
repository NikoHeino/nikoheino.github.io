import type { Project } from '../types';

/**
 * Replace `media.src` values with paths to your own assets.
 * Drop files into `public/media/` and reference them as `/media/your-file.mp4`.
 * Each project supports any mix of images, GIFs, and videos.
 */
export const projects: Project[] = [
  {
    id: 'cooking-system',
    title: 'Cooking System',
    summary: 'A persistent cooking system that functions even when the physical actor gets unloaded',
    description:
      'Built a cooking system to handle the actual actor being unloaded by World Partition. UI visuals were created as a placeholder by me in Figma. ' +
        '\n \n **Requirements** \n' +
        '- Create easily configurable cooking system \n' +
        '- Interaction through cooking actors \n' +
        '- Needs to keep cooking even when actor is unloaded by World Partition \n \n \n ' +
        '**Design Choices** \n' +
        '- Creates and/or retrieves data objects by utilizing actor transform as an ID \n' +
        '- Widget is purely a visual representation \n' +
        '- Actions in widget call data object functions \n' +
        '- Changes requiring a visual update on the widget handled through delegates on the data object \n' +
        '- Recipes easily configurable through a data table',
    role: 'Tamalpais Games · Lead Engineer & UI/UX Design',
    year: '2026',
    tags: ['Unreal', 'C++', 'Gameplay', 'UI', 'Blueprints'],
    media: [
      { kind: 'image', src: '/Assets/Media/CookingSystem/img_CookingSystemWidget_Empty.png', alt: 'Cooking System Widget' },
        {
            kind: 'video',
            src: '/Assets/Media/CookingSystem/video_CookingSystemWidget.mp4',
            alt: 'Cooking System Widget in action',
        },
    ],
    links: [
      { label: 'Devlog', href: '#' },
      { label: 'Source', href: '#' },
    ],
    featured: true,
  },
  {
    id: 'inventory-system',
    title: 'Inventory System',
    summary: 'A data driven inventory system',
    description:
      'Built an inventory system that is data driven. From items themselves, to the widget. \n\n' +
        '**Requirements**\n' +
        '- Create easily configurable inventory system \n' +
        '- Items utilize only a single class\n\n' +
        '**Design Choices**\n' +
        '- Items are data driven\n' +
        '- Configured through a data table with all shared data\n' +
        '- A data asset slot in case an item requires type specific information e.g recoil information for a weapon\n' +
        '- Categories displayed in widget also data driven and easily configurable through the use of tags in a gameplay tag container\n',
    role: 'Tamalpais Games · Lead Engineer & UI/UX Design',
    year: '2025',
    tags: ['Unreal', 'C++', 'Gameplay', 'UI', 'Blueprints'],
    media: [
      { kind: 'image', src: '/Assets/Media/Inventory/img_InventoryWidget.png', alt: 'Inventory Widget' },
      {
        kind: 'gif',
        src: 'https://picsum.photos/seed/nebula-anim/1280/720',
        alt: 'Animated nebula loop',
      },
      { kind: 'image', src: 'https://picsum.photos/seed/nebula-3/1280/720', alt: 'Material graph' },
    ],
    featured: true,
  },
  {
    id: 'detectors',
    title: 'S.T.A.L.K.E.R Inspired Detectors',
    summary: 'Created the functionality and visuals of multiple types of Stalker-inspired detectors.',
    description:
      'Created the functionality and visuals of multiple types of Stalker-inspired detectors\n\n' +
        '**Requirements**\n' +
        '- Create 3 types of detectors \n' +
        '- Radar detector with a needle rotating through the display, with blips appearing when the needle passes through, and then fading out \n' +
        '- Range detector, with two 7-segment displays, displaying range in meters up until 99 \n' +
        '- Direction and magnitude detector, segments light up pointing to detection source, grows larger when magnitude increases/distance decreases \n\n' +
        '**Design Choices**\n' +
        '- Creates a UObject based object for running the detector logic \n' +
        '- Detectors get equipped into weapon equipment slots \n' +
        '- Something',
    role: 'Tamalpais Games · Lead Engineer & 3D Art',
    year: '2026',
    tags: ['Unreal', 'C++', 'Blender', 'Substance Painter', 'HLSL', 'Material Graph'],
    media: [
      { kind: 'image', src: '/Assets/Media/Detectors/Radar/img_RadarDetectorBlenderBlankBG.png', alt: 'Radar Detector Blender' },
      { kind: 'image', src: 'https://picsum.photos/seed/forge-2/1280/720', alt: 'Validation report' },
    ],
    links: [{ label: 'Write-up', href: '#' }],
  },
  {
    id: 'weapons',
    title: 'Comprehensive Weapon System',
    summary: 'I created a comprehensive weapons system, spanning from highly configurable procedural recoil, Attachment System, and more.',
    description:
      'With this system, you have total control over weapon recoil, curves for the visual kick, and a spring solver for pushing the view up. Includes a full attachment system with a proper attachment menu. UI Design is a placeholder, waiting on an artist.\n\n' +
        '**Requirements**\n' +
        '- Highly configurable procedural recoil\n' +
        '- Weapon Attachments\n' +
        '- Widget for attachments, including a 3D preview\n\n' +
        '**Design Choices**\n' +
        '- Weapon data asset contains information about compatible attachments\n' +
        '- Widget displays only one of each attachment\n' +
        '- Visual kick of a weapon is handled separately from overall recoil\n' +
        '- Utilizes Hookes Law for calculating recoil force\n' +
        '- ',
    role: 'Tamalpais Games · Lead Engineer',
    year: '2025',
    tags: ['Unreal', 'C++'],
    media: [
      { kind: 'image', src: 'https://picsum.photos/seed/sentinel-2/1280/720', alt: 'Decision tree visualizer' },
    ],
  },
  {
    id: 'item-persistence',
    title: 'Fully Persistent Items',
    summary: 'I built a system to essentially chunk items and load/unload them manually, in a large open world environment.',
    description:
      'Since world partition doesnt support persistent actors, I had to implement a custom chunking system, that utilizes object pooling to improve performance. If the pool runs out, Im adjusting the spawn rate of new objects based on frame rate to avoid stuttering.',
    role: 'Tamalpais Games - Lead Engineer',
    year: '2025',
    tags: ['Art', 'Concept', 'Painting'],
      media: [
          { kind: 'image', src: 'https://picsum.photos/seed/forge/1280/720', alt: 'Forge dashboard' },
          { kind: 'image', src: 'https://picsum.photos/seed/forge-2/1280/720', alt: 'Validation report' },
      ],
  },
  {
    id: 'neon-sign',
    title: 'Weathered Retro Sign',
    summary: 'Modeled and textured a worn sign.',
    description:
      'Created a weathered sign from the 60s that I modeled in Blender and textured in Substance Painter. This sign exists in real life in Los Angeles, CA.',
    role: 'Tamalpais Games · 3D Art',
    year: '2026',
    tags: ['Blender', 'Substance Painter'],
    media: [
        { kind: 'image', src: 'https://picsum.photos/seed/voxel-2/1280/720', alt: 'Sign in unreal 01' },
        { kind: 'image', src: 'https://picsum.photos/seed/voxel-2/1280/720', alt: 'Sign in unreal 02' },
        { kind: 'image', src: 'https://picsum.photos/seed/voxel-2/1280/720', alt: 'Sign in real life 01' },
        { kind: 'image', src: 'https://picsum.photos/seed/voxel-2/1280/720', alt: 'Sign in real life 02' },
    ],
    links: [{ label: 'GitHub', href: '#' }],
    featured: true,
  },
    {
        id: 'bar-env',
        title: 'High-end Bar Environment',
        summary: 'Modeled and designed a high-end bar environment.',
        description:
            'Created a weathered sign from the 60s that I modeled in Blender and textured in Substance Painter. This sign exists in real life in Los Angeles, CA.',
        role: 'Solo · 3D Art',
        year: '2026',
        tags: ['Blender', 'Substance Painter'],
        media: [
            { kind: 'image', src: 'https://picsum.photos/seed/voxel-2/1280/720', alt: 'Sign in unreal 01' },
            { kind: 'image', src: 'https://picsum.photos/seed/voxel-2/1280/720', alt: 'Sign in unreal 02' },
            { kind: 'image', src: 'https://picsum.photos/seed/voxel-2/1280/720', alt: 'Sign in real life 01' },
            { kind: 'image', src: 'https://picsum.photos/seed/voxel-2/1280/720', alt: 'Sign in real life 02' },
        ],
        links: [{ label: 'GitHub', href: '#' }],
        featured: true,
    },
];

export const allTags = Array.from(
  new Set(projects.flatMap((p) => p.tags)),
).sort();
