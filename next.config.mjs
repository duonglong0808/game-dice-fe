/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: 'http://192.168.1.10:9999/api',
    API_GAME_DICE: 'http://192.168.1.10:9991/api',
    API_URL_WSK: 'http://192.168.1.10:8089',
    HOST_KU: 'https://vn.vc3559k.net/api',
    URL_MAIN: 'http://192.168.1.10:3002',
  },

  // Production
  // env: {
  //  URL_MAIN: 'https://vk169.net',
  //   API_URL: 'https://api.vk169.net/api',
  //   API_GAME_DICE: 'https://game.api.vk169.net/api',
  //   API_URL_WSK: 'https://game.wsk.vk169.net',
  //   HOST_KU: 'https://vn.vc3559k.net/api',
  // },
  images: {
    domains: ['storage.googleapis.com'],
  },
};

export default nextConfig;
