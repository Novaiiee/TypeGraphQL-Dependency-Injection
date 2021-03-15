import { Service } from "typedi";
import { User } from "./../types/User";

@Service()
export class UserService {
	private users: User[] = [{ name: "Twito" }];

	all() {
		return this.users;
	}

	create(name: string) {
		this.users.push({ name });
		return this.users.find((user) => user.name === name);
	}
}
