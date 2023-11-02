import React from 'react'

const ListItems = (props) => {

    const {item} = props;

  return (
    <div className='container shadow p-3 mb-5 bg-body rounded border border-danger cards'>
            <div className="card"  >
                <img src={item.thumbnail} className="card-img-top" alt="..." style={{ height: "300px" }} />
                <div className="card-body ">
                    <h4 className='fw-bold'>{item.title}</h4>
                    <div className="d-flex bd-highlight mb-3">
                    
                        <div className="me-auto p-2 bd-highlight"><p className="card-text text-danger fs-4 fw-bold "> <i className="fa-solid fa-indian-rupee-sign fa-sm" style={{ color: "Red" }}></i> {item.price}0</p></div>
                        <div className="mt-1 p-2 bd-highlight"> <span className="badge bg-success text-inline fs-6 ">{item.rating} <i className="fa-sharp fa-solid fa-star fa-sm" style={{ color: "#f2f2f2" }}></i></span></div>
                    </div>

                    <div className=" bd-highlight"><p className="card-text text-dark fs-4 fw-bold ">  {item.discountPercentage} % OFF</p></div>
                </div>
            </div>
        </div>
  )
}

export default ListItems