export const getShareUrls = (url:string) => [
  {
    text: 'Fb',
    url: `https://www.facebook.com/sharer.php?u=${encodeURI(url)}`,
  },
  {
    text: 'Vk',
    url: `https://vk.com/share.php?url=${encodeURI(url)}`,
  },
  {
    text: 'Twtr',
    url: `https://twitter.com/intent/tweet?url=${encodeURI(url)}`
  }
];
