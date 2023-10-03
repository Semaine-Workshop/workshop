import { Repository, RepositoryImpl } from "@ibaraki-douji/api";
import { User } from "../Models/UserModel";
import Config from "../Config";

@Repository("users")
export class UserRepository extends RepositoryImpl<User> {

    constructor() {
        super();
    }

    

    getByEmail(email: string) {
        //get user by email
        return this.db.query(`SELECT * FROM User WHERE email = ?`, [email])
            .then((result: any) => {
                if (result.length > 0) {
                    return result[0];
                }
                return null;
            }
        );
    }


}