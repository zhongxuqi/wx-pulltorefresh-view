const app = getApp()

Page({
  data: {
    colors: [],
    refreshing: false,
    nomore: false,
  },
  randomColor: function () {
    return `rgba(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},1)`;
  },
  generateColors: function (length) {
    return new Array(length).fill(null).map(() => this.randomColor());
  },
  onLoad: function () {
    const colors = this.generateColors(10);
    this.setData({
      colors: colors,
    });
  },
  refreshData: function () {
    this.setData({
      refreshing: true,
    })
    setTimeout(() => {
      const colors = this.generateColors(10);
      this.setData({
        colors,
        refreshing: false,
        nomore: false,
      });
    }, 2000);
  },
  loadmoreData: function () {
    this.setData({
      refreshing: true,
    })
    setTimeout(() => {
      if (this.data.colors.length > 10) {
        this.setData({
          nomore: true,
        })
      } else {
        const colors = this.generateColors(8);
        this.setData({
          colors: [...this.data.colors, ...colors],
        });
      }
      this.setData({
        refreshing: false,
      })
    }, 2000);
  },
})
