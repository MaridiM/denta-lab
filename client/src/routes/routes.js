const routes =  { 
    main: '/',
    login: '/login',
    register: {
        changeAccount: '/register/change-account',
        patient: '/register/patient',
        dentist: {
            step_1: '/register/dentist/step-1',
            step_2: '/register/dentist/step-2',
        }
    },
    password: {
        forgot: '/password/forgot',
        reset: '/password/reset',
    },
    help: '/help'
}
export default routes