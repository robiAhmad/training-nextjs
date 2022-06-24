import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";

import mystyle from '@/styles/avatar.module.css'

const DetailAvatar = () => {
    const router = useRouter();

    let { dataId, gender, name, position, profession, imgSrc } = router.query;

    return (
        <>
            <div className="content">
                <Head>
                    <title>Avatar - {name}</title>
                    <meta name="description" content={position}/>
                </Head>
                <h3>
                    <span className={mystyle.label}>Avatar</span> {name} - {gender}
                </h3>
                <div className={mystyle.imageWrapper}>
                    <Image
                        src={imgSrc}
                        alt={dataId}
                        placeholder='blur'
                        blurDataURL={imgSrc}
                        width={200}
                        height={200}
                        layout='responsive'
                        objectFit='contain'
                    />
                </div>
                <div>
                    <p><span className={mystyle.label}>Position</span></p>
                    <p className={mystyle['sub-label']}>{position}</p>
                </div>
                <div>
                    <p><span className={mystyle.label}>Profession</span></p>
                    <p className={mystyle['sub-label']}>{profession}</p>
                </div>
            </div>
        </>
    );
};

export default DetailAvatar;
