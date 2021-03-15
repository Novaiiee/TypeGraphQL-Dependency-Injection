import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class User {
	@Field()
	readonly name: string;
}
