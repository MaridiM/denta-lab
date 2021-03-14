export const paths = { 
    main: '/',
    auth: '/auth',
    login: '/auth/login',
    register: {
        changeAccount: '/auth/register/change-account',
        patient: '/auth/register/patient',
        dentist: {
            step_1: '/auth/register/dentist/step-1',
            step_2: '/auth/register/dentist/step-2',
        }
    },
    password: {
        forgot: '/auth/password/forgot',
        reset: '/auth/password/reset',
    },
    help: '/auth/help'
}