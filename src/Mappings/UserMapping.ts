//user mapping

import { Service } from "@ibaraki-douji/api";

@Service()
export class UserMapping {

    public map(user: any) {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            created_at: user.created_at
        }
    }

    public mapAll(users: any[]) {
        return users.map(user => this.map(user));
    }

}