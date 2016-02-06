module.exports = () => {
  const youtubeVideos = document.querySelectorAll('.js-youtube-embed');

  [...youtubeVideos].forEach((node) => {
    node.addEventListener('click', (e) => {
      const button = e.target.parentNode;
      const url = `${button.getAttribute('data-src')}?autoplay=1`;
      const video = document.createElement('iframe');
      
      video.setAttribute('frameborder', '0');
      video.setAttribute('allowfullscreen', '');
      video.setAttribute('src', url);

      button.parentNode.replaceChild(video, button);
    });
  });
};
