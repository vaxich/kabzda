import React from "react"
import { useState } from "react"

export default {
    title: "React memo demo"
}

export const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)


export const Example1 = () => {

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Pavel", "dimich", "artem"])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <NewMessagesCounter count={counter} />
        <Users users={users} />
    </>
}