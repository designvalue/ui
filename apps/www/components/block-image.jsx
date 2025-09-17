import Image from "next/image";
import { cn } from "@/lib/utils";
export function BlockImage(_a) {
    var name = _a.name, _b = _a.width, width = _b === void 0 ? 1440 : _b, _c = _a.height, height = _c === void 0 ? 900 : _c, className = _a.className;
    return (<div className={cn("relative aspect-[1440/900] w-full overflow-hidden rounded-lg", className)}>
      <Image src={"/r/styles/new-york/".concat(name, "-light.png")} alt={name} width={width} height={height} className="object-cover dark:hidden" data-image="light"/>
      <Image src={"/r/styles/new-york/".concat(name, "-dark.png")} alt={name} width={width} height={height} className="hidden object-cover dark:block" data-image="dark"/>
    </div>);
}
