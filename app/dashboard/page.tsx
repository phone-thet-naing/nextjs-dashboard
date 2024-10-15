// "use client";

import { useEffect, useState } from "react";

export default function Page() {
    // const [count, setCount] = useState(0);

    // useEffect(() => {
    //     setInterval(() => {
    //         setCount(count + 1);
    //     }, 1000);
    // }, [count]);

    return (
        <>
            <p>Dashboard Page</p>
            {/* <p>Count Up: {count} </p> */}
            <p>{Date()}</p>
        </>
    );
}
