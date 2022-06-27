const myMixins = {
  methods: {
    dataBr(data, showTime = true) {
      return `${
        data.toLocaleDateString("pt-BR", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }) +
        (showTime
          ? " | " +
            this.formatarComZero(data.getHours()) +":"+
            this.formatarComZero(data.getMinutes())
          : "")
      }`;
    },
    formatarComZero(int) {
      return ("00" + int).slice(-2);
    },
  },
};

export default myMixins;
