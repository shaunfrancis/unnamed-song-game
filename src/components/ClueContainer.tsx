"use client";
import Image from 'next/image';
import Clue from '../types/Clue';
import { Languages } from '../constants/Languages';
import styles from '../app/page.module.css';

export default function ClueContainer( { clue } : { clue : Clue } ){
    const lang = clue.language in Languages ? Languages[clue.language as keyof typeof Languages] : Languages.missing;

    return (
        <div className={styles["clue-container"]}>
            <div className={styles["language-container"]}>
                <div className={styles["language-name"]}>{lang.enName}</div>
                <div className={styles["language-local-name"] + " " + styles["language-name"]}>{lang.localName}</div>
                <Image src={"/" + clue.language + ".png"} alt={lang.enName} width={70 / lang.ratio} height={70} />
            </div>
            <div className={styles["lyric-container"]}>
                <img className={styles["lyric-flag-blur"]} src={"/" + clue.language + ".png"}/>
                {   clue.lyrics.split("\n").map( (line, j) => {
                        return(<div className={styles["lyric-line"]} key={j}>{line}</div>)
                    })
                }
            </div>
        </div>
    )
}