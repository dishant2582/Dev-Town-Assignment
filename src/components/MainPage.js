
import React, { useEffect, useState } from 'react'
import ListItems from './ListItems';


const MainPage = () => {


    const [Products, setProducts] = useState([])
    const [page, setpage] = useState(0)
    const [pagebtn, setpagebtn] = useState(true)
    const [Search, setSearch] = useState(null)

    const fetchdata = async () => {
        const url = `https://dummyjson.com/products?&limit=9&skip=${page}`;
        let data = await fetch(url);
        let parseData = await data.json();
        setProducts(parseData.products)
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    }

    const handleNext = async () => {
        setpage(page + 9);
        fetchdata()
    }

    const handlePre = async () => {
        setpage(page - 9);
        fetchdata()
    }

    const handleSearchchange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    }

    const handlesearch = async () => {
        const url = `https://dummyjson.com/products/search?q=${Search}&limit=0`;
        let data = await fetch(url);
        let parseData = await data.json();
        setProducts(parseData.products);
        setpagebtn(false);
        console.log(Products);
    }

    const handledropdown = async(e) =>{

        var x = (e.target.id).toString()
        const url = `https://dummyjson.com/products/category/${x}`;
        let data = await fetch(url);
        let parseData = await data.json();
        setProducts(parseData.products);
        setpagebtn(false);
        console.log(Products);
        
    }

    useEffect(() => {
        fetchdata();
        //eslint-disable-next-line
    }, [])

    // var a = ["sss","xxx","yyyy"];
    return (
        <>
            <div className='container'>



                <h1 className='fw-bold my-4 text-decoration-underline'>TOP TRENDING PRODUCTS</h1>

                <div className="d-flex justify-content-center align-items-center">

                    <div className="dropdown mx-5">
                        <div className="btn btn-secondary dropdown-toggle btn-primary" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            Catogory
                        </div>

                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink" onClick={handledropdown}>
                            <li className="dropdown-item" id="smartphones"  >SmartPhones</li>
                            <li className="dropdown-item" id="laptops">Laptops</li>
                            <li className="dropdown-item" id="groceries"> Groceries</li>
                            <li className="dropdown-item" id="skincare"  >Skincare</li>
                            <li className="dropdown-item" id="sunglasses">Sunglasses</li>
                           
                            
                        </ul>
                    </div>

                    <div className="col-md-8">

                        <div className="search">
                            <i className="fa fa-search"></i>
                            <input type="text" className="form-control" onChange={handleSearchchange} placeholder="Search Item" />
                            <button className="btn btn-primary" onClick={handlesearch}>Search</button>
                        </div>

                    </div>



                </div>



                <div className="row">
                    {Products.map((x) => {
                        return <div className="col-md-4 my-3">
                            <ListItems item={x} />
                        </div>
                    })}
                </div>
            </div>


            {pagebtn && <div className="container d-flex justify-content-between my-5 ">
                <button disabled={page <= 0} type="button" className="btn btn-warning" onClick={handlePre}> &larr; Previous</button>
                <button disabled={page >= 95} type="button" className="btn btn-warning" onClick={handleNext}>Next &rarr;</button>
            </div>}


        </>
    )
}

export default MainPage