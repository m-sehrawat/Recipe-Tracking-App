import { RecipeCard } from "./RecipeCard";

import { useEffect, useState } from "react";

export const Recipe = () => {

    const initState = { title: "", ingredients: "", cookTime: "", imgURL: "", instructions: "" };

    const [recipeData, setRecipeData] = useState(initState);
    const [form, setForm] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {

        fetch(`http://localhost:3005/recipe`)
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                setForm(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const postData = (data) => {

        fetch(`http://localhost:3005/recipe`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                getData();
            })
    }


    const handleChange = (e) => {
        let { name, value } = e.target;

        setRecipeData({ ...recipeData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        postData(recipeData);
    }



    return (

        <div className='mainBox'>
            <div className="container">
                <div className="row">
                    <div className="col boxHeightTop">

                        <div className="mx-3 mt-3 border p-4" >
                            <p className="text-center fs-5">Create a new recipe</p>
                            <form onSubmit={handleSubmit}>
                                <input onChange={handleChange} name="title" type="text" className="form-control mb-3" placeholder="Title" />
                                <input onChange={handleChange} name="ingredients" type="text" className="form-control mb-3" placeholder="Ingredients" />
                                <input onChange={handleChange} name="cookTime" type="text" className="form-control mb-3" placeholder="Time to cook" />
                                <input onChange={handleChange} name="imgURL" type="text" className="form-control mb-3" placeholder="Image URL" />
                                <input onChange={handleChange} name="instructions" type="text" className="form-control mb-3" placeholder="Instructions" />
                                <div className="d-grid">
                                    <input type="submit" className="btn btn-success" />
                                </div>
                            </form>
                        </div>

                    </div>
                    <div className="col boxHeightTop cardBox">
                        <RecipeCard />
                    </div>
                </div>
                <div className="row boxHeightBottom">3</div>
            </div>
        </div>



    )
}