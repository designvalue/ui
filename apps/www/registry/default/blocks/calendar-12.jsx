"use client";
import * as React from "react";
import { enUS, es } from "react-day-picker/locale";
import { Calendar } from "@/registry/default/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/registry/default/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/registry/default/ui/select";
const localizedStrings = {
    en: {
        title: "Book an appointment",
        description: "Select the dates for your appointment",
    },
    es: {
        title: "Reserva una cita",
        description: "Selecciona las fechas para tu cita",
    },
};
export default function Calendar12() {
    const [locale, setLocale] = React.useState("es");
    const [dateRange, setDateRange] = React.useState({
        from: new Date(2025, 8, 9),
        to: new Date(2025, 8, 17),
    });
    return (<Card>
      <CardHeader className="relative border-b">
        <CardTitle>{localizedStrings[locale].title}</CardTitle>
        <CardDescription>
          {localizedStrings[locale].description}
        </CardDescription>
        <Select value={locale} onValueChange={(value) => setLocale(value)}>
          <SelectTrigger className="absolute right-4 top-4 w-[100px]">
            <SelectValue placeholder="Language"/>
          </SelectTrigger>
          <SelectContent align="end">
            <SelectItem value="es">Español</SelectItem>
            <SelectItem value="en">English</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="pt-4">
        <Calendar mode="range" selected={dateRange} onSelect={setDateRange} defaultMonth={dateRange === null || dateRange === void 0 ? void 0 : dateRange.from} numberOfMonths={2} locale={locale === "es" ? es : enUS} className="bg-transparent p-0" buttonVariant="outline"/>
      </CardContent>
    </Card>);
}
