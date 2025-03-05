function domready(func) {
  document.addEventListener("DOMContentLoaded", func);
  // or
  if (document.readyState === "interactive" || document.readyState === "complete" ) {
    func();
  }
}
domready(() => console.log(`DOM is ready`))
