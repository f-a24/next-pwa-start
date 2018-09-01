export default class extends React.PureComponent {
  componentDidMount() {
    if ("serviceWorker" in navigator) {
      var isLocalhost = Boolean(
        window.location.hostname === "localhost" ||
        window.location.hostname === "[::1]" ||
        window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
        );
      if (!isLocalhost) {
        window.addEventListener("load", () => {
          navigator.serviceWorker.register("./sw.js");
        });
      }
    }
  }
  render() {
    return <h1>Hello Next.js</h1>;
  }
}
