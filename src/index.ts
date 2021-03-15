import { ApolloServer } from "apollo-server";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import Container from "typedi";

const main = async () => {
	const server = new ApolloServer({
		schema: await buildSchema({ resolvers: [__dirname + "/resolvers/*.ts"], container: Container }),
	});

	try {
    await server.listen(5000)
		console.log("Server Started")
  } catch(err) {
    console.log(err);
  }
};

main();
