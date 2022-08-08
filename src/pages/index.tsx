import type { NextPage } from "next";
import { BoardBox } from "@/domains/Board/components";

const Home: NextPage = () => {
    // console.log("Cookie (pages > index.tsx) : " + document.cookie);

    return (
        <>
            <BoardBox />
        </>
    );
};

export default Home;
