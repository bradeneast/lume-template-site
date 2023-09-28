export default {
  id: "video",
  label: "Video",
  fields: [
    {
      name: 'src',
      label: 'Source URL',
      widget: 'file'
    }
  ],

  pattern: /{\{ ?comp\.video\(.+?src: ?"(.*?)".+?\}}/ms,

  fromBlock: function (match) {
    return { src: match[1] };
  },

  toBlock: function (data) {
    return `{{ comp.video({ src: "${data.src}" }) }}`;
  },

  toPreview: function (data) {
    return `<video loop autoplay muted playsinline src="${data.src}"></video>`;
  }
};