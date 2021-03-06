import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://m.kse.kg/api/company/',
    //baseURL: 'http://localhost:8081/api/company/',
    timeout: 1000
});

instance.interceptors.request.use(
    (response) => {
        let token = localStorage.getItem('token')

        if (token) {
            response.headers['Authorization'] = `Bearer ${token}`
        }

        return response
    },

    (error) => {
      return error
    }
)

instance.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        if (error.response.status === 401) {
            localStorage.removeItem('token');
            localStorage.removeItem('role')
            window.location = "/login"
        } else {
            console.log(error)
        }
    }
)



class CompanyService {

    getInfoCompanyById() {  // Получение данных компании по токену, для заполнения шапки отчета
        return instance.get('', { headers: { 'Content-Type': 'Applicationjson' } })
    }

    updateCompanyInfo(name, opforma, activity, address, phone, fax, email, supervisor, id) { // Изменение данных о компании
        return instance.put('', {name, opforma, activity, address, phone, fax, email, supervisor, id})
    }

    addCompany(name, kod) {
        return instance.post('', {name, kod})
    }

    addUser(login, idcompany) {
        return instance.post('/user', {login, idcompany})
    }

}

export default new CompanyService();