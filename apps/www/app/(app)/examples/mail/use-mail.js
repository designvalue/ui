import { atom, useAtom } from "jotai";
import { mails } from "@/app/(app)/examples/mail/data";
var configAtom = atom({
    selected: mails[0].id,
});
export function useMail() {
    return useAtom(configAtom);
}
