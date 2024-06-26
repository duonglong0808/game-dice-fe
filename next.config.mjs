/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: 'http://localhost:9999/api',
    API_GAME_DICE: 'http://localhost:9991/api',
    API_URL_WSK: 'http://localhost:8089',
    HOST_KU: 'https://vn.vc3559k.net/api',
    URL_MAIN: 'http://localhost:3002',
  },

  // Dev
  // env: {
  //  URL_MAIN: 'https://vk169.net',
  //   API_URL: 'https://api.vk169.net/api',
  //   API_GAME_DICE: 'https://game.api.vk169.net/api',
  //   API_URL_WSK: 'https://game.wsk.vk169.net',
  //   HOST_KU: 'https://vn.vc3559k.net/api',
  // },
   // Production
  //  env: {
  //   URL_MAIN: 'https://ku3933d.net',
  //   API_URL: 'https://api.ku3933d.net/api',
  //   API_GAME_DICE: 'https://api-game.ku3933d.net/api',
  //   API_URL_WSK: 'https://ws.ku3933d.net',
  // },
  images: {
    domains: ['storage.googleapis.com'],
  },
};

export default nextConfig;
