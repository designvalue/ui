"use client";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "@/registry/new-york/hooks/use-toast";
import { Button } from "@/registry/new-york/ui/button";
import { Checkbox } from "@/registry/new-york/ui/checkbox";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, } from "@/registry/new-york/ui/form";
var items = [
    {
        id: "recents",
        label: "Recents",
    },
    {
        id: "home",
        label: "Home",
    },
    {
        id: "applications",
        label: "Applications",
    },
    {
        id: "desktop",
        label: "Desktop",
    },
    {
        id: "downloads",
        label: "Downloads",
    },
    {
        id: "documents",
        label: "Documents",
    },
];
var displayFormSchema = z.object({
    items: z.array(z.string()).refine(function (value) { return value.some(function (item) { return item; }); }, {
        message: "You have to select at least one item.",
    }),
});
// This can come from your database or API.
var defaultValues = {
    items: ["recents", "home"],
};
export function DisplayForm() {
    var form = useForm({
        resolver: zodResolver(displayFormSchema),
        defaultValues: defaultValues,
    });
    function onSubmit(data) {
        toast({
            title: "You submitted the following values:",
            description: (<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>),
        });
    }
    return (<Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField control={form.control} name="items" render={function () { return (<FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Sidebar</FormLabel>
                <FormDescription>
                  Select the items you want to display in the sidebar.
                </FormDescription>
              </div>
              {items.map(function (item) { return (<FormField key={item.id} control={form.control} name="items" render={function (_a) {
                    var _b;
                    var field = _a.field;
                    return (<FormItem key={item.id} className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox checked={(_b = field.value) === null || _b === void 0 ? void 0 : _b.includes(item.id)} onCheckedChange={function (checked) {
                            var _a;
                            return checked
                                ? field.onChange(__spreadArray(__spreadArray([], field.value, true), [item.id], false))
                                : field.onChange((_a = field.value) === null || _a === void 0 ? void 0 : _a.filter(function (value) { return value !== item.id; }));
                        }}/>
                        </FormControl>
                        <FormLabel className="font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>);
                }}/>); })}
              <FormMessage />
            </FormItem>); }}/>
        <Button type="submit">Update display</Button>
      </form>
    </Form>);
}
