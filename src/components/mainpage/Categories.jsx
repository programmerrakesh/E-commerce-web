import React from "react";

const Categories =()=>{
    const data = [
        {
            cateImg: "./images/category/cat1.png",
            cateName: "Fashion"
        },
        {
            cateImg: "./images/category/cat2.png",
            cateName: "Electronics" 
        },
        {
            cateImg: "./images/category/cat3.png",
            cateName: "Cars"
        },
        {
            cateImg: "./images/category/cat4.png",
            cateName: "Home & Gardens"
        },
        {
            cateImg: "./images/category/cat5.png",
            cateName: "Gifts"
        },
        {
            cateImg: "./images/category/cat6.png",
            cateName: "Music"
        },
        {
            cateImg: "./images/category/cat7.png",
            cateName: "Health & Beauty"
        },
        {
            cateImg: "./images/category/cat8.png",
            cateName: "Pets"
        },
        {
            cateImg: "./images/category/cat1.png",
            cateName: "Baby Toys"
        },
        {
            cateImg: "./images/category/cat1.png",
            cateName: "Groceries"
        },
        {
            cateImg: "./images/category/cat1.png",
            cateName: "Books"
        }
    ]
return(
    <div className="category">
       {data.map((value, index) => { 
        return(
            <div className="box f_flex" key={index}>
                 <img src={value.cateImg} alt='ok'/>
                 <span>{value.cateName}</span>
            </div>
        )
       })}
    </div>
);

}
export default Categories;