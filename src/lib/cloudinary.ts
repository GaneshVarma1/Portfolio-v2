// Cloudinary configuration and utilities
export const CLOUDINARY_CONFIG = {
  cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'your-cloud-name',
  baseUrl: 'https://res.cloudinary.com',
};

// Generate optimized Cloudinary URLs
export function getCloudinaryUrl(
  publicId: string,
  options: {
    width?: number;
    height?: number;
    quality?: number;
    format?: 'auto' | 'webp' | 'jpg' | 'png';
    fetchFormat?: 'auto' | 'webp' | 'mp4';
  } = {}
) {
  const { width, height, quality = 80, format = 'auto', fetchFormat } = options;
  
  let url = `${CLOUDINARY_CONFIG.baseUrl}/${CLOUDINARY_CONFIG.cloudName}/image/upload`;
  
  // Add transformations
  const transformations = [];
  
  if (width) transformations.push(`w_${width}`);
  if (height) transformations.push(`h_${height}`);
  if (quality) transformations.push(`q_${quality}`);
  if (format) transformations.push(`f_${format}`);
  if (fetchFormat) transformations.push(`f_${fetchFormat}`);
  
  if (transformations.length > 0) {
    url += `/${transformations.join(',')}`;
  }
  
  return `${url}/${publicId}`;
}

// For video/GIF optimization
export function getCloudinaryVideoUrl(
  publicId: string,
  options: {
    width?: number;
    height?: number;
    quality?: number;
    format?: 'mp4' | 'webm';
  } = {}
) {
  const { width, height, quality = 80, format = 'mp4' } = options;
  
  let url = `${CLOUDINARY_CONFIG.baseUrl}/${CLOUDINARY_CONFIG.cloudName}/video/upload`;
  
  const transformations = [];
  
  if (width) transformations.push(`w_${width}`);
  if (height) transformations.push(`h_${height}`);
  if (quality) transformations.push(`q_${quality}`);
  if (format) transformations.push(`f_${format}`);
  
  if (transformations.length > 0) {
    url += `/${transformations.join(',')}`;
  }
  
  return `${url}/${publicId}`;
}

// Predefined optimized URLs for your portfolio assets
export const PORTFOLIO_ASSETS = {
  // Hero image
  heroImage: getCloudinaryUrl('portfolio/IMG_2576', { width: 320, height: 384, quality: 85 }),
  
  // Project GIFs - optimized for web
  promptly: getCloudinaryVideoUrl('portfolio/Promptly', { width: 200, height: 125, quality: 80 }),
  goodmoney: getCloudinaryVideoUrl('portfolio/goodmoneyhero', { width: 200, height: 125, quality: 80 }),
  doc: getCloudinaryVideoUrl('portfolio/Doc', { width: 200, height: 125, quality: 80 }),
  fidi: getCloudinaryVideoUrl('portfolio/fidi', { width: 200, height: 125, quality: 80 }),
  flappy: getCloudinaryVideoUrl('portfolio/flappy', { width: 200, height: 125, quality: 80 }),
  flownia: getCloudinaryVideoUrl('portfolio/flownia', { width: 200, height: 125, quality: 80 }),
  fridgetofood: getCloudinaryVideoUrl('portfolio/fridgetofood', { width: 200, height: 125, quality: 80 }),
  kerala: getCloudinaryVideoUrl('portfolio/kerala', { width: 200, height: 125, quality: 80 }),
  mme: getCloudinaryVideoUrl('portfolio/mme', { width: 200, height: 125, quality: 80 }),
  mmerental: getCloudinaryVideoUrl('portfolio/mmerental', { width: 200, height: 125, quality: 80 }),
  netflix: getCloudinaryVideoUrl('portfolio/netflix', { width: 200, height: 125, quality: 80 }),
  reactwind: getCloudinaryVideoUrl('portfolio/reactwind', { width: 200, height: 125, quality: 80 }),
  rocketapply: getCloudinaryVideoUrl('portfolio/rocketapply', { width: 200, height: 125, quality: 80 }),
  tesla: getCloudinaryVideoUrl('portfolio/tesla', { width: 200, height: 125, quality: 80 }),
}; 