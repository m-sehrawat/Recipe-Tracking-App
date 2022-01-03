export const RecipeInput = () => {
    return (
        <div className="mx-3 mt-3 border p-4">
            <p className="text-center fs-5">Create a new recipe</p>
            <form>
                <input type="text" className="form-control mb-3" placeholder="Title" />
                <input type="text" className="form-control mb-3" placeholder="Ingredients" />
                <input type="text" className="form-control mb-3" placeholder="Time to cook" />
                <input type="text" className="form-control mb-3" placeholder="Image URL" />
                <input type="text" className="form-control mb-3" placeholder="Instructions" />
                <div className="d-grid">
                <input type="submit" className="btn btn-success" />
                </div>
            </form>
        </div>
    )
}