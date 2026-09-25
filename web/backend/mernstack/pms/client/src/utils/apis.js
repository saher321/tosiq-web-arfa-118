const BASE_URL = "http://localhost:5000/api/v1"

export const REGISTER_API   = BASE_URL + "/auth/register"
export const LOGIN_API      = BASE_URL + "/auth/login"
export const FORGOT_API     = BASE_URL + "/auth/forgot-password"
export const RESET_API      = BASE_URL + "/auth/reset-password"

// customers
export const CUSTOMERS_API          = BASE_URL + "/customers"
export const ADD_CUSTOMER_API       = BASE_URL + "/customers/add"
export const DELETE_CUSTOMER_API    = BASE_URL + "/customers/delete"
export const EDIT_CUSTOMER_API      = BASE_URL + "/customers/edit"
export const UPDATE_CUSTOMER_API    = BASE_URL + "/customers/update"