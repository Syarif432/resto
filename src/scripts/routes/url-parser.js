const UrlParser = {
  parseActiveUrlCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    const splitedUrl = this.urlSplitter(url);
    return this.urlCombiner(splitedUrl);
  },

  parseActiveUrlNoCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    console.log("Parsed URL:", url);
    return this.urlSplitter(url);
  },

  urlSplitter(url) {
    const urlsSplits = url.split("/");
    return {
      resource: urlsSplits[1] || null,
      id: urlsSplits[2] || null,
      verb: urlsSplits[3] || null,
    };
  },

  urlCombiner(splitedUrl) {
    return (
      (splitedUrl.resource ? `/${splitedUrl.resource}` : "/") +
      (splitedUrl.id ? "/:id" : "") +
      (splitedUrl.verb ? `${splitedUrl.verb}` : "")
    );
  },
};

export default UrlParser;
