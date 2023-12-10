import { Request, Response } from "express";
import { insertUser, selectUsers, selectUser, checkEmailExistence, modifyDossier, getInfoByUser, selectDossier, deleteDossier, insertDossierArchiv, selectInfoForSearch 
        } from '../service/users/usersInfo';


export async function login(request: Request, response: Response) {
    const { email, password } = request.body;
    try {
        const user = await selectUser(email as string, password as string);

        if (!user) {
            return response
                .status(401)
                .json({ error: true, message: "invalid email or password" });
        } else {
            delete user.password;
            return response.status(200).json({ error: false, data: user });
        }
    } catch (error) {
        console.log(error);
        return response
            .status(500)
            .json({ error: true, message: "Error while getting users" });
    }
}


export async function getUser(request: Request, response: Response): Promise<any> {
    const objectUser = request.body
    try {
        const result = await selectUsers(objectUser);
        return response.status(200).json({ error: false, data: result?.rows });
    } catch (error) {
        console.log(error);
        return response.status(500).json({ error: true, message: "Error while getting users" })
    }
}

export async function getInfoByUserController(
    request: Request,
    response: Response
): Promise<any> {
    const { role } = request.params;
    console.log("🚀 ~ file: usersController.ts:43 ~ request.params:", request.params)
    try {
        const result = await getInfoByUser(role);

        return response.status(200).json({ error: false, data: result?.rows });
    } catch (error) {
        console.log(error);
        return response
            .status(500)
            .json({ error: true, message: "Error while getting info" });
    }
}


export async function addUser(request: Request, response: Response): Promise<any> {
    const objectUser = request.body;

    try {
        const isEmailExist: boolean = await checkEmailExistence(objectUser.email);
        console.log("🚀 ~ file: usersController.ts:62 ~ addUser ~ isEmailExist:", isEmailExist)

        if (isEmailExist) {
            return response.status(500).json({ error: true, message: "User already exists!" })
        } else {
            const result = await insertUser(objectUser);
            console.log("🚀 ~ file: usersController.ts:67 ~ addUser ~ result:", result)

            if (result?.rowCount !== 0) {
                return response.status(200).json({ error: false, message: "User added with success!" })
            } else {
                return response.status(500).json({ error: false, message: "Error while adding user !" })
            }
        }
    } catch (error) {
        console.log(error);
        return response.status(500).json({ error: true, message: "Error while adding user" });
    }
}



export async function updateUser(
    request: Request,
    response: Response
): Promise<any> {
    const {id} = request.params; // Get the id from the request parameters
    console.log("🚀 ~ file: usersController.ts:87 ~ id:", id)
    const role = request.body.role;
    const nom = request.body.nom;
    const prenom = request.body.prenom;
    const numtel = request.body.numtel;
    const email = request.body.email;
    try {
        const result = await modifyDossier(Number(id), role, nom, prenom, numtel, email);

        if (result?.rowCount !== 0) {
            return response
                .status(200)
                .json({ error: false, message: "dossier modified with success!" });
        } else {
            return response.status(500).json({
                error: false,
                message: "Error while modifying dossier !",
            });
        }
    } catch (error) {
        console.log(error);
        return response
            .status(500)
            .json({ error: true, message: "Error while modifying Todo" });
    }
}




export async function archiverDossier(
    request: Request,
    response: Response
): Promise<any> {
    const id = Number(request.params.id);
    try {
        const resultSelect = await selectDossier(id);

        if (resultSelect?.rowCount !== 0) {
            const resultDelete= await deleteDossier(id);
            const resultArchive= await insertDossierArchiv (resultSelect);
            return response
                .status(200)
                .json({ error: false, message: "dossier archived with success!" });
        } else {
            return response.status(500).json({
                error: false,
                message: "Error while selecting dossier !",
            });
        }
    } catch (error) {
        console.log(error);
        return response
            .status(500)
            .json({ error: true, message: "Error while archiving Todo" });
    }
}


export async function searchInfo(request: Request, response: Response): Promise<any> {
    const key = request.params.key;
    console.log("🚀 ~ file: usersController.ts:151 ~ searchInfo ~ key:", key)
    try {
        const result = await selectInfoForSearch(key);
        console.log("🚀 ~ file: usersController.ts:153 ~ searchInfo ~ result:", result)
        return response.status(200).json({ error: false, data: result?.rows });
    } catch (error) {
        console.log(error);
        return response.status(500).json({ error: true, message: "Error while searching" })
    }
}