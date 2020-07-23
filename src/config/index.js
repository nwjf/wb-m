import request, {$get, $post, $put, $delete} from './request'
export const login1 = (data, params) => $post('url', data, params)
export const login2 = (data, params) => $post('url', data, params)
export const login3 = (data, params) => $post('url', data, params)

export const login = (data, params) => {
  return request({
    url: '',
    methods: 'get',
    params,
    data
  });
}