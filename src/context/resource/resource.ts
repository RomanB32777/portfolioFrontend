import { useAuth, storageName } from '../../hooks/auth.hook';
import Axios, { AxiosRequestConfig } from 'axios';


export function useResource() {
  //const {  } = useAuth()
  return {
    //posts: wrapPromise(fetchPosts())
    loadUser: wrapPromise(loadUser()),
    loadPosts: wrapPromise(loadPosts()),
  }
}

function wrapPromise(promise: any) {
  let status = 'pending'
  let result: any
  const suspender = promise.then(
    (r: any) => {
      result = r
      status = 'success'
    },
    (e: any) => {
      result = e
      status = 'error'
    }
  )

  return {
    read() {
      if (status === 'pending') {
        throw suspender
      } else if (status === 'error') {
        throw result
      } else if (status === 'success') {
        return result
      }
    }
  }
}


// function fetchPosts() {
//   return fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
//     .then(res => res.json())
// }

// async function fetchUsers() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users?_limit=5')
//   return await res.json()
// }

const loadPosts = async () => {
  try {
    const config: AxiosRequestConfig = {
      url: 'http://localhost:3040/api/post/',
      method: 'GET',
      headers: {
        "Content-type": "application/json"
      }
    }
    const posts = await Axios(config)
    return posts.data.posts
  } catch (error) {
    console.log(error);
    throw error
  }

}

const loadUser = async () => {
  try {
    const local = (localStorage.getItem(storageName))?.toString()
    if (local) {
      const data = JSON.parse(local) 
      const config: AxiosRequestConfig = {
        url: 'http://localhost:3040/api/auth/dashboard',
        method: 'GET',
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${data.token}`
        }
      }
      const user = await Axios(config)
      return user.data.user    
      // isAuth(data.token)
      //     .then((isLogin) => {
      //         (data && data.token && isLogin) ? login(data) : logout()
      //         setReady(true)
      //         //setToken[token]
      //     })
  }

  } catch (error) {
    console.log(error);
    throw error
  }
  // const auth = await req('http://localhost:3040/api/auth/dashboard', 'GET', null, {
  //     Authorization: `Bearer ${token}`
  // })
  // if (auth.data.message) {
  //     alert(auth.data.message)
  //     return false
  // }
  // return true
}