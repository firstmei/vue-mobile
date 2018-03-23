
import {
	request_post
} from '@/common/js/request'

const API_CONFIG = 'api/HotelApi/HotelApi/GetDishDetail'

/**
 * [getList 菜品详情]
 */
export const getList=(data)=>{
	const url = `${API_CONFIG}`
	return request_post(url,data)
};