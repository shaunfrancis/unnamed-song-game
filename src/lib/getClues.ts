import mysql, { RowDataPacket } from 'mysql2/promise';

export default async function getClues() : Promise<RowDataPacket[]>{
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });

    try {
        const [results] = await connection.query<RowDataPacket[]>( 'SELECT * FROM unnamed_song_game_clues' );
        console.log(results); // results contains rows returned by server

        return results;

    } catch (err) {
        console.log(err);
        throw new Error();
    }
}