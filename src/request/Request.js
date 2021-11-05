const API = "https://eshop-deve.herokuapp.com/api/v2/orders"
export const getProducts = async () =>{
    const res = await fetch(API,{
        method:'GET',
        headers: {
            authorization: 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYyMDY2Mjk4NjIwM30.lhfzSXW9_TC67SdDKyDbMOYiYsKuSk6bG6XDE1wz2OL4Tq0Og9NbLMhb0LUtmrgzfWiTrqAFfnPldd8QzWvgVQ'
          }
    })
    return await res.json()
  }

  export const getProduct = async (id) =>{
    const res = await fetch(`${API}/${id}`)
    return await res.json()
  }

  export const saveProduct = async (nuevoProd)=>{
      const res = await fetch(API,{
          method: 'POST',
          headers:{ 
              Accept: 'application/json', "Content-Type": 'application/json',
              authorization: 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYyMDY2Mjk4NjIwM30.lhfzSXW9_TC67SdDKyDbMOYiYsKuSk6bG6XDE1wz2OL4Tq0Og9NbLMhb0LUtmrgzfWiTrqAFfnPldd8QzWvgVQ'
            },
          body: JSON.stringify(nuevoProd)
      })
      return await res.json()
  }

  export const deleteProduct = async (id) =>{
      await fetch(`${API}/${id}`,{
          method: "DELETE",           
      })
  }

  export const updateProduct = async (id, newProduct)=>{
      const res = await fetch(`${API}/${id}`,{
          method: "PUT",
          headers:{ Accept: 'application/json', "Content-Type": 'application/json'},
          body: JSON.stringify(newProduct)
      })
      return res;
  }