import axios from 'axios'
import { API_LIST_NEWS } from '../constant/Endpoint'

export const GET_LIST_CATEGORY = () => {
    return axios
        .get(API_LIST_NEWS)
        .then(response => {
            return response.data.result.categoryList
        })
        .catch(err => {
            return err
        })
}

export const GET_NEWS_BY_CATEGORY = (id) => {
    return axios
        .get(`${API_LIST_NEWS}/${id}`)
        .then(response => {
            return response.data.result.category.templates
        })
        .catch(err => {
            return err
        })
}