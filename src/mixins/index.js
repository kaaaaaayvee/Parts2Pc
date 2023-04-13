export const apiMixin = {
  data: function () {
    return {
      get apiURL() {
        // return 'https://run.mocky.io/v3/937f4e85-2b29-4efb-a699-f16770469e89'
        return 'https://fakestoreapi.com';
      },
    };
  },
};

const mixins = {
  apiMixin,
};

export default mixins;
