// resolverMap.ts
import { IResolvers } from 'graphql-tools';
const resolverMap: IResolvers = {
  Query: {
    helloWorld(): string {
  return `👋 Hello world! 👋`;
    },

    anotherQuery(): string{
        return 'someother randome query';
    }
  },
};
export default resolverMap;