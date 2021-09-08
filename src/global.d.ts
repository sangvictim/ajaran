import 'reactn';

interface keyVal {
    [key: string]: {
        message: string
    }
}
declare module 'reactn/default' {

    export interface State {
        userToken: string | null;
        errors: keyVal;
    }
}