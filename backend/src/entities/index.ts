import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'text' })
    name: string

    @Column({ type: 'text', unique: true })
    email: string

    @Column({ type: 'text' })
    password: string

    @CreateDateColumn()
    created_at: string

    @UpdateDateColumn()
    updated_at: string

    @OneToMany(() => Mesa, (mesa) => mesa.user)
    mesas: Mesa[]
}

@Entity('mesas')
export class Mesa {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'text' })
    name: string

    @Column({ type: 'double precision' })
    value: number

    @CreateDateColumn()
    created_at: string

    @UpdateDateColumn()
    updated_at: string

    @ManyToOne(() => User, (user) => user.mesas)
    user: User

    @OneToMany(() => Round, (round) => round.mesa)
    rounds: Round[]

}

@Entity('rounds')
export class Round {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'text' })
    name: string

    @Column({ type: 'double precision' })
    value: number

    @CreateDateColumn()
    created_at: string

    @UpdateDateColumn()
    updated_at: string

    @ManyToOne(() => Mesa, (mesa) => mesa.rounds)
    mesa: Mesa

    @OneToMany(() => People, (people) => people.round)
    peoples: People[]
}

@Entity('peoples')
export class People {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'text' })
    name: string

    @Column({ type: 'double precision' })
    value: number

    @ManyToOne(() => Round, (round) => round.peoples)
    round: Round
}