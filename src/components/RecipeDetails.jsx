export const RecipeDetails = ({ recipeDetail, isDetails }) => {

    const { title, ingredients, cookTime, imgURL, instructions } = recipeDetail;

    if (!isDetails) {
        return null;
    };

    return (
        <div className=" shadow mt-4 ms-3 me-4 p-3 overflow-hidden ">
            <div className="row">
                <div className="col-3 overflow-hidden imgBoxHeight">
                    <img className="img-fluid" src={imgURL} alt="recipe" />
                </div>
                <div className="col">
                    <h1>{title}</h1>
                    <p className="fs-5"><b>Ingredients:</b> {ingredients}</p>
                    <p className="fs-5"><b>Time to cook:</b> {cookTime} Hours</p>
                    <p className="fs-5"><b>Instructions:</b> {instructions}</p>
                </div>
            </div>
        </div>
    );
};