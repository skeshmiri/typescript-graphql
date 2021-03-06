import { Field, ObjectType, ID } from "type-graphql";
import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@ObjectType() // make it a type in gql and choose the Fields() we expose to the query
@Entity()
export class Product extends BaseEntity{

    @Field(() => ID) // return ID type from gql use with apollo cache
    @PrimaryGeneratedColumn() // each entity must have a primary key - this one is auto genned ("uuid") // will gen a uuid
    id: number; // types of each field // int or double ? cause gql needs to know

    @Field()
    @Column() // can specify type for db here too ("int") 
    name: string;
}