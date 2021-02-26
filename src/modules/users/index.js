import { query as patientsQuery } from './patient/query' 
import { query as dentistsQuery } from './dentist/query' 
import { query as personalQuery } from './personal/query' 

export const query = {
    ...patientsQuery,
    ...dentistsQuery,
    ...personalQuery,
}