import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Inject, Service } from "typedi";
import { UserService } from "./../services/UserService";
import { User } from "./../types/User";

@Resolver()
@Service()
export class UserResolver {
	constructor(@Inject() private userService: UserService) {}

	@Query(() => String)
	root() {
		return "root query";
	}

	@Query(() => [User])
	async getAll(): Promise<User[]> {
		return this.userService.all();
	}

	@Mutation(() => User)
	async createUser(@Arg("name") name: string): Promise<User> {
		return this.userService.create(name)!;
	}
}
