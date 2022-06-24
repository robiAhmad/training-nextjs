import Link from "next/link";
import avatars from "@/jsonfiles/dataAvatar";
import Head from "next/head";
import mystyle from "@/styles/avatar.module.css";
import { useState } from "react";

const Index = () => {
    const [datas, setDatas] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    const loadData = () => {
        setIsFetching(true);
        setTimeout(() => {
            fetch("/api/people")
                .then((res) => res.json())
                .then((data) => {
                    setDatas(data);
                    setIsFetching(false);
                })
                .catch((e) => {
                    console.log(e);
                    setIsFetching(false);
                });
        }, 300);
    };

    return (
        <div className="content">
            <Head>
                <title>Avatar</title>
                <meta name="description" content="Legend of avatar" />
            </Head>
            <h1>Avatars</h1>
            <div>
                <button onClick={() => loadData()}>LoadData</button>
            </div>
            <div>
                <h3>Loaded Data</h3>
                {isFetching && <p>Fetching...</p>}
                {datas.length > 0 && !isFetching && (
                    <div>
                        {datas.map((data) => (
                            <p key={data.id}>{data.name}</p>
                        ))}
                    </div>
                )}
            </div>
            <ul className={mystyle["custom-ul"]}>
                {avatars.map((avatar) => (
                    <li key={avatar._id} className={mystyle.customLi}>
                        <Link
                            href={{
                                pathname: `/avatar/${avatar._id}`,
                                query: {
                                    name: avatar.name,
                                    position: avatar.position,
                                    gender: avatar.gender,
                                    profession: avatar.profession,
                                    imgSrc: avatar.photoUrl,
                                },
                            }}
                            as={`/avatar/${avatar._id}`}
                        >
                            {avatar.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Index;
