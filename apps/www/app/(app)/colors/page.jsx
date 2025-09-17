import { getColors } from "@/lib/colors";
import { ColorPalette } from "@/components/color-palette";
export default function ColorsPage() {
    var colors = getColors();
    return (<div className="grid gap-8">
      {colors.map(function (colorPalette) { return (<ColorPalette key={colorPalette.name} colorPalette={colorPalette}/>); })}
    </div>);
}
