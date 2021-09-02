/**
 * ini isinya list url
 */
interface listURL {
    TODOS: 'todos',
    USER: 'users',
    HOMED: 'XXX',
    HOMEZ: 'XXX',
}
const URL = <T extends listURL>(url: T) => {
    const TODOS = 'todos'
    const USER = 'users'
}

export default URL