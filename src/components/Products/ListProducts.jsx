import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { deleteProducts, listProductsData } from '../../axios/listProducts';

const ListProducts = () => {
    const [products,setProducts] = useState([])
    const loadData = async()=>{
        const data  = await listProductsData();
        setProducts(data)
    }
    useEffect(()=>{
        loadData()
    },[])
    const handleDelete = async(id)=>{
      if(confirm("Are you sure")){
        await deleteProducts(id);
        alert("Xóa thành công")
        loadData()
      }
    }
    console.log(products)
  return (
     <div>
      <button className="btn btn-success"><Link to={`/products/form`} className="text-white">Thêm</Link></button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Thumbnail</th>
            <th scope="col">Stock</th>
            <th scope="col">CategoryId</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td><img src={item.thumbnail} alt="" width={50}/></td>
                <td>{item.stock}</td>
                <td>{item.categoryId}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    Xóa
                  </button>
                  <button className="btn btn-warning">
                    <Link to={`/${item.id}`} className="text-white">
                      Chi tiết
                    </Link>
                  </button>
                  <button className="btn btn-primary">
                    <Link to={`/products/form/${item.id}`} className="text-white">
                      Sửa
                    </Link>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ListProducts
