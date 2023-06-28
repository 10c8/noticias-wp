import axios from 'axios';
import SETTINGS from '../settings';

export default {
  getCategories(cb) {
    axios
      .get(
        SETTINGS.API_BASE_PATH +
          'categories?sort=name&hide_empty=true&per_page=50'
      )
      .then(response => {
        cb(response.data.filter(c => c.name !== 'Uncategorized'));
      })
      .catch(e => {
        cb(e);
      });
  },

  getPages(cb) {
    axios
      .get(SETTINGS.API_BASE_PATH + 'pages?per_page=10')
      .then(response => {
        cb(response.data);
      })
      .catch(e => {
        cb(e);
      });
  },

  getPage(id, cb) {
    if(!Number.isInteger(id) || !id)
      return false;

    axios
      .get(SETTINGS.API_BASE_PATH + 'pages/' + id)
      .then(response => {
        cb(response.data);
      })
      .catch(e => {
        cb(e);
      });
  },

  getPosts(limit = 5, cb) {
    axios
      .get(SETTINGS.API_BASE_PATH + 'posts?per_page=' + limit + '&_embed')
      .then(response => {
        // Add support for post thumbnails
        response.data.forEach(post => {
          if (post.featured_media) {
            const thumb = post._embedded['wp:featuredmedia'][0];

            post.featured_image = {
              url: thumb.source_url,
              width: thumb.media_details.width,
              height: thumb.media_details.height,
            };
          }
        });

        cb(response.data);
      })
      .catch(e => {
        cb(e);
      });
  },
};
