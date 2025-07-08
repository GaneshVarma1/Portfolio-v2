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
  heroImage: "https://res.cloudinary.com/dv9y8selw/image/upload/v1752011149/IMG_2576_idgbbh.png",

  // Project GIFs and Videos - using real Cloudinary URLs
  promptly: "https://res.cloudinary.com/dv9y8selw/image/upload/v1752011144/Promptly_qqa4zg.gif",
  goodmoney: "https://res.cloudinary.com/dv9y8selw/video/upload/v1752011130/goodmoney_jr5upd.mp4",
  doc: "https://res.cloudinary.com/dv9y8selw/image/upload/v1752011151/Doc_el2jc0.gif",
  fidi: "https://res.cloudinary.com/dv9y8selw/video/upload/v1752011127/fidi_dymavj.mp4",
  flappy: "https://res.cloudinary.com/dv9y8selw/image/upload/v1752011157/flappy_ep1jh9.gif",

  fridgetofood: "https://res.cloudinary.com/dv9y8selw/video/upload/v1752011128/fridgetofood_wuyzg3.mp4",
  kerala: "https://res.cloudinary.com/dv9y8selw/image/upload/v1752011155/kerala_ayrirk.gif",
  mme: "https://res.cloudinary.com/dv9y8selw/video/upload/v1752011130/mme_irzruf.mp4",
  mmerental: "https://res.cloudinary.com/dv9y8selw/image/upload/v1752011153/mmerental_o9oe2c.gif",
  netflix: "https://res.cloudinary.com/dv9y8selw/video/upload/v1752011130/netflix_r3ryvx.mp4",
  reactwind: "https://res.cloudinary.com/dv9y8selw/image/upload/v1752011150/reactwind_kzggzr.gif",
  rocketapply: "https://res.cloudinary.com/dv9y8selw/video/upload/v1752011127/rocketapply_oook4d.mp4",
  tesla: "https://res.cloudinary.com/dv9y8selw/video/upload/v1752011128/tesla_caxyqw.mp4",
  candy: "https://res.cloudinary.com/dv9y8selw/image/upload/v1752011158/candy_psacpa.gif",
  friendai: "https://res.cloudinary.com/dv9y8selw/image/upload/v1752011148/FriendAi_jrnfuc.gif",
}; 