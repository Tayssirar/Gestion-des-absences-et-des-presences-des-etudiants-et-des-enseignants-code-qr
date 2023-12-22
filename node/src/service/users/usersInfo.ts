import pool from "../../database";
import { UserType } from "../../types/types";


export async function selectUser(email: string, password: string) {
    try {
        const result = await pool.query(
            `SELECT * FROM public.infousers WHERE email='${email}' and password='${password}'`
        );
        return result.rows[0] || null;
    } catch (error) {
        console.log(error);
        return null;
    }
}

//afficher la liste d'ultilisateur selon leur role
export async function selectUsers(objectUser: UserType) {
    try {
        const result = await pool.query(
            `SELECT * FROM public.infousers 
            WHERE role='${objectUser.role}' yarnyar`
            );
        return result;
    } catch (error) {
        console.log(error);
    }
}


export async function insertUser(objectUser: UserType) {
    try {
        return await pool.query(`
        INSERT INTO public.infousers(role, nom, prenom, numtel, email)
            VALUES (
                '${objectUser.role}',
                '${objectUser.nom}',
                '${objectUser.prenom}',
                '${objectUser.numtel}',
                '${objectUser.email}'

            )
        `);
    } catch (error) {
        console.log(error);
    }
}


export async function getInfoByUser(role:string) {
    try {
        const sql = `SELECT id,prenom, nom, numtel, email
        FROM public.infousers where role='${role}';`;
        const result = await pool.query(sql);
        return result;
    } catch (error) {
        console.log("error getting user by role",error);
    }
}



export async function checkEmailExistence(email:string): Promise<boolean> {
    try {
        const result = await pool.query(
            `SELECT *
            FROM public.infousers
            where email='${email}';`
        );
        return result.rows.length > 0 ? true : false;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export async function modifyDossier(
    id:number, 
    role: string, 
    nom:string, 
    prenom:string, 
    numtel:number, 
    email:string, ) {
    try {
        const sql = 
        `UPDATE public.infousers SET 
            role = '${role}',
            nom = '${nom}',
            prenom = '${prenom}',
            numtel = '${numtel}',
            email='${email}'

            WHERE id='${id}';
        `;

    return await pool.query(sql);
    } catch (error) {
        console.log("modify dossier service error",error);
    }
}

export async function selectDossier(id: number) {
    try {
        const sql = 
            `SELECT * FROM public.infousers WHERE id='${id}'`
        const result = await pool.query(sql);
            return result.rows[0] || null;
    } catch (error) {
        console.log("Error getting dossier:", error);
        return null;
    }
}


export async function deleteDossier(id: number) {
    try {
        return await pool.query(`DELETE FROM public.infousers WHERE id='${id}'`);
    } catch (error) {
        console.log(error);
    }
}

export async function insertDossierArchiv(objectUser: UserType) {
    try {
        return await pool.query(`
        INSERT INTO public.archive_infousers (id, role, nom, prenom, numtel, email, password)
            VALUES (
                '${objectUser.id}',
                '${objectUser.role}',
                '${objectUser.nom}',
                '${objectUser.prenom}',
                '${objectUser.numtel}',
                '${objectUser.email}',
                '${objectUser.password}'

            )
        `);
    } catch (error) {
        console.log(error);
    }
}


export async function selectInfoForSearch(key:any) {
    try {
        const result = await pool.query(
            `SELECT * FROM public.infousers 
            WHERE role=$1 OR
            nom=$1 OR
            prenom=$1 OR
            numtel=$2 OR
            email=$1 OR
            id=$2;`,
            [key, parseInt(key)]
        );
        console.log("Executed SQL:", result.rows); // Logging the SQL query result
        return result;
    } catch (error) {
        console.log(error);
    }
}
