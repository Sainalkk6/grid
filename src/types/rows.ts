import { SetStateAction } from "react";

export interface Rows {
    rows:number;
    setRows:React.Dispatch<SetStateAction<number>>
    setProceed:React.Dispatch<SetStateAction<boolean>>
}