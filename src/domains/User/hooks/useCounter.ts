import dayjs from "dayjs";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function useCounter(expireTime: number): void | string {
    const router = useRouter();
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const now = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(now);
    }, []);

    if (time.getTime() > expireTime * 1000) {
        window.localStorage.clear();
        router.push("/");
    }

    return dayjs(expireTime * 1000 - time.getTime()).format("mm:ss");
}
