// Placeholder images for better UX
export const PLACEHOLDER_IMAGES = {
  PROPERTY: '/placeholder-property.jpg',
  AVATAR: '/placeholder-avatar.jpg',
} as const;

// API Configuration
export const API_CONFIG = {
  BASE_URL: 'http://localhost:5099/api',
  TIMEOUT: 10000,
} as const;

// UI Configuration
export const UI_CONFIG = {
  GRID_COLUMNS: {
    MOBILE: 1,
    TABLET: 2,
    DESKTOP: 3,
    LARGE_DESKTOP: 4,
  },
  ANIMATION_DURATION: 200,
} as const;
