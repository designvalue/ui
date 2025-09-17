"use client";
import * as React from "react";
import { Icons } from "@/__registry__/icons";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/registry/new-york/ui/table";
import { iconLibraries } from "@/registry/registry-icons";
export default function IconsPage() {
    return (<div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[240px]" align="left">
              name
            </TableHead>
            {Object.keys(iconLibraries).map(function (library) { return (<TableHead key={library}>{library}</TableHead>); })}
          </TableRow>
        </TableHeader>
        <TableBody>
          {Object.entries(Icons).map(function (_a) {
            var name = _a[0], icon = _a[1];
            return (<TableRow key={name}>
              <TableCell align="left">
                <code>{name}</code>
              </TableCell>
              {Object.entries(iconLibraries).map(function (_a) {
                    var library = _a[0], name = _a[1];
                    var IconComponent = icon[library];
                    return (<TableCell key={library} className="[&_svg]:h-4 [&_svg]:w-4">
                    <React.Suspense fallback={<div>Loading...</div>}>
                      {IconComponent && <IconComponent />}
                    </React.Suspense>
                  </TableCell>);
                })}
            </TableRow>);
        })}
        </TableBody>
      </Table>
    </div>);
}
