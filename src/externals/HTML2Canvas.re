[@bs.deriving abstract]
type options = {
  [@bs.optional]
  allowTaint: bool,
  [@bs.optional]
  proxy: string,
  [@bs.optional]
  useCORS: bool,
};

[@bs.module]
external make: (Dom.element, option(options)) => Js.Promise.t(Dom.element) =
  "html2canvas";