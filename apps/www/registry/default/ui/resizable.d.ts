import * as ResizablePrimitive from "react-resizable-panels"

declare const ResizablePanelGroup: ({
  className,
  ...props
}: React.ComponentProps<
  typeof ResizablePrimitive.PanelGroup
>) => import("react").JSX.Element
declare const ResizablePanel: import("react").ForwardRefExoticComponent<
  Omit<
    import("react").HTMLAttributes<
      | HTMLDivElement
      | HTMLElement
      | HTMLObjectElement
      | HTMLLabelElement
      | HTMLSelectElement
      | HTMLTableElement
      | HTMLButtonElement
      | HTMLInputElement
      | HTMLDialogElement
      | HTMLMetaElement
      | HTMLFormElement
      | HTMLProgressElement
      | HTMLTextAreaElement
      | HTMLStyleElement
      | HTMLLinkElement
      | HTMLMapElement
      | HTMLAnchorElement
      | HTMLHeadingElement
      | HTMLImageElement
      | HTMLLIElement
      | HTMLOListElement
      | HTMLParagraphElement
      | HTMLSpanElement
      | HTMLUListElement
      | HTMLAreaElement
      | HTMLAudioElement
      | HTMLBaseElement
      | HTMLQuoteElement
      | HTMLBodyElement
      | HTMLBRElement
      | HTMLCanvasElement
      | HTMLTableColElement
      | HTMLDataElement
      | HTMLDataListElement
      | HTMLModElement
      | HTMLDetailsElement
      | HTMLDListElement
      | HTMLEmbedElement
      | HTMLFieldSetElement
      | HTMLHeadElement
      | HTMLHRElement
      | HTMLHtmlElement
      | HTMLIFrameElement
      | HTMLLegendElement
      | HTMLMeterElement
      | HTMLOptGroupElement
      | HTMLOptionElement
      | HTMLOutputElement
      | HTMLPreElement
      | HTMLSlotElement
      | HTMLScriptElement
      | HTMLSourceElement
      | HTMLTemplateElement
      | HTMLTableSectionElement
      | HTMLTableCellElement
      | HTMLTimeElement
      | HTMLTitleElement
      | HTMLTableRowElement
      | HTMLTrackElement
      | HTMLVideoElement
      | HTMLTableCaptionElement
      | HTMLMenuElement
      | HTMLPictureElement
    >,
    "id" | "onResize"
  > & {
    className?: string | undefined
    collapsedSize?: number | undefined
    collapsible?: boolean | undefined
    defaultSize?: number | undefined
    id?: string | undefined
    maxSize?: number | undefined
    minSize?: number | undefined
    onCollapse?: ResizablePrimitive.PanelOnCollapse | undefined
    onExpand?: ResizablePrimitive.PanelOnExpand | undefined
    onResize?: ResizablePrimitive.PanelOnResize | undefined
    order?: number | undefined
    style?: object | undefined
    tagName?: keyof HTMLElementTagNameMap | undefined
  } & {
    children?: import("react").ReactNode
  } & import("react").RefAttributes<ResizablePrimitive.ImperativePanelHandle>
>
declare const ResizableHandle: ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean
}) => import("react").JSX.Element
export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
//# sourceMappingURL=resizable.d.ts.map
