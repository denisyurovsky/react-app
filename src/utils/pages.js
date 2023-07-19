import { useMemo } from "react";

export const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
}

export const useGetPagesArray = (totalPages) => {
    const arr = useMemo(() => {
        const total = []
        for (let i = 0; i < totalPages; i++) {
            total.push(i + 1)
        }
        return total;
    }, [totalPages])
 
  return arr;
}