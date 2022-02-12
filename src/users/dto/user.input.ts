import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UserInput {
  @Field()
  userId: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  photoURL?: string;
}